# Allows you to run this addon's app easily as a docker container.
# See README.md for more details.
#
# 1. Build the image with: docker build --no-cache -t test/breeze-theme:latest .
# 2. Run the image with: docker run --rm -ti -p8080:8080 test/breeze-theme
#
# Uses Docker Multi-stage builds: https://docs.docker.com/build/building/multi-stage/

# The "Build" stage. Copies the entire project into the container, into the /app/ folder, and builds it.
# The app is actually packaged in src/test/java, so we need to run couple of specialized steps.
FROM eclipse-temurin:17 AS BUILD
COPY . /app/
WORKDIR /app/
# 1. Need to copy all routes to src/main/java otherwise Vaadin plugin won't include JS files into webpack build for all components.
# Workaround for https://github.com/vaadin/flow/issues/14732
RUN cp -r src/test/java/* src/main/java/
# 2. Turn all test dependencies into compile deps, so that test files copied to src/main/java/ are compilable.
RUN sed -i 's_<scope>test</scope>_<!-- -->_g' pom.xml
# 3. Finally, build the app
ENV VAADIN_OFFLINE_KEY=eyJraWQiOiI1NDI3NjRlNzAwMDkwOGU2NWRjM2ZjMWRhYmY0ZTJjZDI4OTY2NzU4IiwidHlwIjoiSldUIiwiYWxnIjoiRVM1MTIifQ.eyJhbGxvd2VkUHJvZHVjdHMiOlsidmFhZGluLWNvbGxhYm9yYXRpb24tZW5naW5lIiwidmFhZGluLXRlc3RiZW5jaCIsInZhYWRpbi1kZXNpZ25lciIsInZhYWRpbi1jaGFydCIsInZhYWRpbi1ib2FyZCIsInZhYWRpbi1jb25maXJtLWRpYWxvZyIsInZhYWRpbi1jb29raWUtY29uc2VudCIsInZhYWRpbi1yaWNoLXRleHQtZWRpdG9yIiwidmFhZGluLWdyaWQtcHJvIiwidmFhZGluLW1hcCIsInZhYWRpbi1zcHJlYWRzaGVldC1mbG93IiwidmFhZGluLWNydWQiLCJ2YWFkaW4tY2xhc3NpYy1jb21wb25lbnRzIiwidmFhZGluLXBvcnRsZXQiLCJ2YWFkaW4tb3NnaSIsInZhYWRpbi1kc3B1Ymxpc2hlciIsImZsb3ctcG9seW1lci10ZW1wbGF0ZSIsInZhYWRpbi1tcHIiLCJ2YWFkaW4tZnJhbWV3b3JrIiwidmFhZGluLXN3aW5nLWtpdCIsInZhYWRpbi1zc28ta2l0IiwiaGlsbGEtc3NvLWtpdCIsInZhYWRpbi1rdWJlcm5ldGVzLWtpdCIsInZhYWRpbi1vYnNlcnZhYmlsaXR5LWtpdCJdLCJzdWIiOiI4NGI3M2VkMC0wNWU2LTQ5MjktYmRkOC0wMjdmYjNkMzEyNDUiLCJ2ZXIiOjEsImlzcyI6IlZhYWRpbiIsIm5hbWUiOiJNYXJ0aW4gVnnFoW7DvSIsImFsbG93ZWRGZWF0dXJlcyI6WyJlbnRlcnByaXNlLXByb2R1Y3RzLTIwMjIxMCIsImNlcnRpZmljYXRpb25zIiwidjhleHRlbmRlZHN1cHBvcnQiLCJleHBlcnRvbmRlbWFuZCIsInRyYWluaW5nIiwiZGVzaWduZXIiLCJjaGFydHMiLCJkb2N1bWVudGF0aW9uIiwiZGV2ZWxvcG1lbnRvbmRlbWFuZCIsInN3aW5nLWtpdCIsInY3ZXh0ZW5kZWRzdXBwb3J0Iiwic3NvLWtpdCIsImt1YmVybmV0ZXMta2l0Iiwid2FycmFudHkiLCJzcHJlYWRzaGVldCIsInRlc3RiZW5jaCIsImJvYXJkIiwiYXBwc3RhcnRlciIsIm9ic2VydmFiaWxpdHkta2l0IiwidmlkZW90cmFpbmluZyIsImV4cGVydGNoYXQiXSwibWFjaGluZV9pZCI6Im1pZC0yOGU1NWQxYS0yMTU5Y2Y1MyIsInN1YnNjcmlwdGlvbiI6IkVudGVycHJpc2UgT2JzZXJ2YWJpbGl0eSBLaXQgS3ViZXJuZXRlcyBLaXQgRXhwZXJ0IG9uIERlbWFuZCBQYWNrYWdlIFN3aW5nIEtpdCBTU08gS2l0IiwiYnVpbGRfdHlwZXMiOlsiZGV2ZWxvcG1lbnQiLCJwcm9kdWN0aW9uIl0sImV4cCI6MTY5OTkyMDAwMCwiaWF0IjoxNjgzMTMwMjkxLCJhY2NvdW50IjoiVmFhZGluIEVtcGxveWVlcyJ9.AFs7aD-Yf3HOCOD3F2-z2HfqKLOyNYqAUeckHJiq8BTW_f1TWId4STugEZBiBcUzVmvrWQQN-_x3J_NEVBnc57_yAMRJSsYYExG_zvek7lB6yK0py3ztt-oWS10ttP5CCYlKWBpVgEZGg30yxymGOgGuzAS3tP7mDVQo8WnUmEuuNglq
RUN ./mvnw -C clean package -Pproduction -Dvaadin.webpackForFrontendBuild=true -DskipTests
# Prepare a folder with dependencies
RUN ./mvnw dependency:copy-dependencies -DoutputDirectory=target/deps

# At this point, we have the app as follows:
# 1. All jar deps are at /app/target/deps/*.jar
# 2. We also need to add /app/target/classes/ and /app/target/test-classes/ onto classpath, to include the app itself.


# The "Run" stage. Start with a clean image, and copy over just the app itself, omitting gradle, npm and any intermediate build files.
FROM eclipse-temurin:17
COPY --from=BUILD /app/target/deps /app/
COPY --from=BUILD /app/target/classes /app/classes
COPY --from=BUILD /app/target/test-classes /app/test-classes
WORKDIR /app/
RUN ls -la
SHELL ["/bin/bash", "-c"]
RUN echo $'#!/bin/bash\n\
set -e -o pipefail\n\
CP=`ls *.jar|tr \'\\n\' \':\'`\n\
java -cp "classes:test-classes:$CP" com.example.application.Main' >/app/run
RUN chmod a+x /app/run
EXPOSE 8080
ENTRYPOINT ./run


package com.example.application;

import com.github.mvysny.vaadinboot.VaadinBoot;
import org.eclipse.jetty.webapp.WebAppContext;
import org.jetbrains.annotations.NotNull;

import java.io.IOException;

public class Main {
    public static void main(String[] args) throws Exception {
        System.setProperty("vaadin.webpackForFrontendBuild", "true");
        new VaadinBoot() {
            @Override
            protected @NotNull WebAppContext createWebAppContext() throws IOException {
                final WebAppContext context = super.createWebAppContext();
                // see https://github.com/mvysny/vaadin-boot/issues/15 for more details
                context.setAttribute("org.eclipse.jetty.server.webapp.ContainerIncludeJarPattern", ".*\\.jar|.*/classes/.*|.*/test-classes/.*");
                return context;
            }
        }.withArgs(args).run();
    }
}

package com.example.application.views.componentview;

import com.vaadin.flow.component.HasStyle;
import com.vaadin.flow.component.littemplate.LitTemplate;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.router.PageTitle;
import com.example.application.views.MainLayout;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;

@PageTitle("Component View")
@Route(value = "component-view", layout = MainLayout.class)
@Tag("component-view")
@JsModule("./views/componentview/component-view.ts")
public class ComponentView extends LitTemplate implements HasStyle {

}

package com.example.application.views.chartsview;

import com.example.application.views.MainLayout;
import com.vaadin.flow.component.HasStyle;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.littemplate.LitTemplate;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;

@PageTitle("Charts View")
@Route(value = "charts", layout = MainLayout.class)
@Tag("charts-view")
@JsModule("./views/chartsview/charts-view.ts")
public class ChartsView extends LitTemplate implements HasStyle {

}

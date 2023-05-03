package com.example.application;

import com.github.mvysny.vaadinboot.VaadinBoot;

public class Main {
    public static void main(String[] args) throws Exception {
        System.setProperty("vaadin.webpackForFrontendBuild", "true");
        new VaadinBoot().withArgs(args).run();
    }
}

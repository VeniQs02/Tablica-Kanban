package pl.io2.tablicakanban.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {

    @RequestMapping(value = {"/home", "/register", "/login", "/userAccount"})
    public String index() {
        return "index.html";
    }

    @RequestMapping(value = {"/"})
    public String root() {
        return null;
    }
}

package com.bearfb.jxwx.modules.user.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * <p>
 *  用户模块路由选择
 * </p>
 *
 * @author linzimin
 * @date 2019/8/13 16:26
 */
@Controller
@RequestMapping(value = {"/user"})
public class UserHomeController {

    /**
     * 登录页面
     * @return 返回"user/login"页面
     */
    @RequestMapping(value = {"","/","/login","/login.html"})
    public String loginPage(){
        return "modules/user/login";
    }

    /**
     * 注册页面
     * @return 返回"user/register"页面
     */
    @RequestMapping(value = {"/register","register.html","/reg","/reg.html"})
    public String registerPage(){
        return "modules/user/register";
    }

    /**
     * 忘记密码页面
     * @return 返回"user/register"页面
     */
    @RequestMapping(value = {"/miss","miss.html","password","password.html"})
    public String missPage(){
        return "modules/user/password";
    }
}

package com.perso.gtper.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.perso.gtper.entities.Role;
import com.perso.gtper.services.RoleService;

import lombok.RequiredArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
@RequestMapping("/api/v1/roles")
@RequiredArgsConstructor
public class RolesController {

  @Autowired
  private RoleService roleService;

  @GetMapping("/all")
  public Iterable<Role> getRoles() {
      return roleService.getAllRoles();
  }
  
}

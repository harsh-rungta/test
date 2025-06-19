package com.anuvrtti.compliance.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class AssignedComps {

    @Id
    private String companyName;
    private String groupName;
    private String department;

}
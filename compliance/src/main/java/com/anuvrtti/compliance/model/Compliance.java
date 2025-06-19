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
public class Compliance {

    @Id
    private int complianceId; // Unique identifier for the compliance
    private String complianceName;
    private String act;
    private String category;

}
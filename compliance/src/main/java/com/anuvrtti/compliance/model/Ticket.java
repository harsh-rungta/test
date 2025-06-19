package com.anuvrtti.compliance.model;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Ticket {

    @Id
    private String ticketId; // Assuming ticketId is unique for each user
    private String assignedTo; // Username of the user to whom the ticket is assigned
    private String description; // Description of the issue or request
    private String issueType; // e.g., "bug", "feature request", "task"
    private String status; // e.g., "open", "in progress", "closed"
    private String raisedBy; // Username of the user who raised the ticket
    private String companyName;
    private String groupName;
    private boolean isActive;
    private Date raisedOn;
    private int priority; // e.g., 1 for high, 2 for medium, 3 for low

}   
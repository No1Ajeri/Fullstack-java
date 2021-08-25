package tech.getarrays.employeemanager;

import tech.getarrays.employeemanager.tech.gerarrays.employeemanager.model.Employee;

import java.util.List;

public interface EmployeeService {
    Employee addEmployee(Employee entity);

    List<Employee> getAll();

    Employee updateEmployee(Employee entity);

    void deleteAnyUser(Long id);
}


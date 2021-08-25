package tech.getarrays.employeemanager.tech.gerarrays.employeemanager.model.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import tech.getarrays.employeemanager.tech.gerarrays.employeemanager.model.Employee;

public interface EmployeeRepo extends JpaRepository<Employee, Long> {
}

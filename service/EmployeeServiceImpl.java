package tech.getarrays.employeemanager.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tech.getarrays.employeemanager.EmployeeService;
import tech.getarrays.employeemanager.tech.gerarrays.employeemanager.model.Employee;
import tech.getarrays.employeemanager.tech.gerarrays.employeemanager.model.repo.EmployeeRepo;

import java.util.List;

@Service
public class EmployeeServiceImpl implements EmployeeService {

@Autowired
private EmployeeRepo repo;
    @Override
    public Employee addEmployee(Employee entity) {
        return repo.save(entity);
    }

    @Override
    public List<Employee> getAll() {
        return repo.findAll();
    }

    @Override
    public Employee updateEmployee(Employee entity) {
        return repo.save(entity);
    }

    @Override
    public void deleteAnyUser(Long id) {
        repo.deleteById(id);
    }
}



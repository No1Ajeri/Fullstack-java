package tech.getarrays.employeemanager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tech.getarrays.employeemanager.tech.gerarrays.employeemanager.model.Employee;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class EmployeeController {
    @Autowired
    private EmployeeService service;

    @PostMapping("/new")                                 //Create new Record
    public Employee addNewEmployee(@RequestBody Employee entity){

        return service.addEmployee(entity);
    }

    @GetMapping("/getAllEmployees")                    //Get All Records
    public List<Employee> fetchAll(){

        return service.getAll();
    }

    @PutMapping("/updateEmployee")              //Update Existing Record
    public Employee updateExistingEmployee(@RequestBody Employee entity){

        return service.updateEmployee(entity);
    }

    @DeleteMapping("/deleteAnyUser/{id}")       //Delete Record(s)
    public Employee deleteEmployee(@PathVariable("id") Long id){
        service.deleteAnyUser(id);
        return null;
    }

}
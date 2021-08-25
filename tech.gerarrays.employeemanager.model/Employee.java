package tech.getarrays.employeemanager.tech.gerarrays.employeemanager.model;

    //Import Necessary data from their defined libraries
import javax.persistence.*;
import java.io.Serializable;

    //Define the Necessary libraries
@Entity
@Table
public class Employee implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, updatable = false)

    //Define Class
    private Long personId;
    private String firstName;
    private String lastName;
    private String profession;
    private Long salary;
    private String city;

        public Employee() {
        }
//Define Getters & Setters Respectively
        public Long getPersonId() {
            return personId;
        }

        public void setPersonId(Long personId) {

            this.personId = personId;
        }

        public String getFirstName() {                               //firstName

            return firstName;
        }

        public void setFirstName(String firstName) {

            this.firstName = firstName;
        }

        public String getLastName() {                                    //lastName

            return lastName;
        }

        public void setLastName(String lastName) {

            this.lastName = lastName;
        }

        public String getProfession() {                                //profession

            return profession;
        }

        public void setProfession(String profession) {

            this.profession = profession;
        }

        public Long getSalary() {                                //salary

            return salary;
        }

        public void setSalary(Long salary) {

            this.salary = salary;
        }

        public String getCity() {                             //city

            return city;
        }

        public void setCity(String city) {

            this.city = city;
        }


        @Override
        public String toString() {
            return "Employee{" +
                    "personId=" + personId +
                    ", firstName='" + firstName + '\'' +
                    ", lastName='" + lastName + '\'' +
                    ", profession='" + profession + '\'' +
                    ", salary=" + salary +
                    ", city='" + city + '\'' +
                    '}';
        }
    }

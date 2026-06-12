CREATE TABLE employees (
  employee_id Serial PRIMARY KEY,
  employee_name varchar(50),
  department_id int REFERENCES departments (department_id),
  salary decimal(10, 2),
  hire_date DATE
);


-- creating the departments table
CREATE TABLE departments (
  department_id Serial PRIMARY KEY,
  department_name varchar(50)
)
INSERT INTO
  departments (department_name)
VALUES
  ('HR'),
  ('Marketing'),
  ('Finance'),
  ('IT'),
  ('Sales'),
  ('Engineering'),
  ('Customer Support'),
  ('Administration'),
  ('Research'),
  ('SQA');


INSERT INTO
  employees (employee_name, department_id, salary, hire_date)
VALUES
  ('রহিম আহমেদ', 1, 45000.00, '2023-01-15'),
  ('সারা চৌধুরী', 2, 52000.50, '2022-11-20'),
  ('করিমুল হক', 3, 60000.00, '2021-05-10'),
  ('ফাতেমা বেগম', 4, 75000.75, '2023-03-01'),
  ('আরিফ হোসেন', 5, 42000.00, '2024-02-12'),
  ('নাসরিন সুলতানা', 6, 85000.00, '2020-08-25'),
  ('জসিম উদ্দিন', 7, 38000.25, '2023-09-10'),
  ('তানভীর আহমেদ', 8, 48000.00, '2022-12-05'),
  ('মুনমুন আক্তার', 9, 70000.00, '2021-07-18'),
  ('রাশেদুল ইসলাম', 10, 55000.00, '2023-04-22');


-- iner join retirve
SELECT
  *
FROM
  employees AS e
  INNER JOIN departments USING (department_id)


  
  -- show department name with avrg salary
SELECT
  department_name,
  round(avg(salary))
FROM
  employees
  INNER JOIN departments USING (department_id)
GROUP BY
  department_name

-- count employees in each depoartment


SELECT
  department_name,count (*)
FROM
  employees
  INNER JOIN departments USING (department_id)

GROUP BY
  department_name


-- find the departrment name with highest avg salary

select department_name, round(avg(salary)) as avg_salary from employees
join departments using (department_id)
group by department_name order by avg_salary desc limit 1


/* eslint-disable no-unused-vars */
import { AiOutlineSearch } from "react-icons/ai";
import { useRef, useCallback, useState, useEffect } from "react";
import { AwesomeButton } from "react-awesome-button";
import { Navigate } from "react-router-dom";
import Button from "../Buttons/Button";
import AccordionBasicExample from "../practice/accordian";

export const IntroSql = () => {
  const [password, setPassword] = useState("");
  const [actname, setactName] = useState("");

  const [actpassword, setactPassword] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    setPassword("admin123");
    setName("unknown' or '1'='1");
    setactName("admin");
    setactPassword("admin123");
  }, []);

  const passRef = useRef(null);
  const nameRef = useRef(null);
  const actpassRef = useRef(null);
  const actnameRef = useRef(null);
  
  const copypasstocopyClipboard = useCallback(() => {
    passRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  const copynametocopyClipboard = useCallback(() => {
    nameRef.current?.select();
    window.navigator.clipboard.writeText(name);
  }, [name]);

  const copyactpasstocopyClipboard = useCallback(() => {
    actpassRef.current?.select();
    window.navigator.clipboard.writeText(actpassword);
  }, [actpassword]);

  const copyactnametocopyClipboard = useCallback(() => {
    actnameRef.current?.select();
    window.navigator.clipboard.writeText(actname);
  }, [actname]);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl text-yellow-500 font-bold mb-4">SQL Code Injection</h2>
      <p className="text-xl">
        SQL (Structured Query Language) is a standard programming language for managing and
        manipulating relational databases. It is widely used for tasks such as querying data,
        updating records, and database management.
      </p>

      <p className="mt-2 text-xl">
        SQL Injection is a type of cybersecurity attack where an attacker can insert malicious SQL
        code into a query, potentially gaining unauthorized access to a database or manipulating
        data. It occurs when user input is not properly validated or sanitized by the application.
      </p>

      <p className="mt-2 text-xl">
        In the demonstration below, a simple login application is vulnerable to SQL Injection.
        Explore the admin and malicious user credentials to observe how SQL Injection can exploit
        vulnerabilities in the system.
      </p>
     

      <p className="mt-2 text-xl">
    SQL (Structured Query Language) is a powerful tool for managing and manipulating databases.
    Below are some basic SQL queries that you can use for educational purposes:
  </p>
  
  <div className="focus:ring-2 focus:border-white  border-3">

      <ul className="mt-4 list-disc text-left text-lg ml-8 text-blue-400">
  <li>Select All Data from a Table:</li>
  <code>
    SELECT * FROM employees;
  </code>

  <li>Select Specific Columns:</li>
  <code>
    SELECT name, age FROM employees;
  </code>

  <li>Filter Data with WHERE Clause:</li>
  <code>
    SELECT * FROM employees WHERE department = IT;
  </code>

  <li>Update Data:</li>
  <code>
    UPDATE employees SET age = 26 WHERE name = John Doe;
  </code>

  <li>Delete Data:</li>
  <code>
    DELETE FROM employees WHERE id = 3;
  </code>

  <li>Sort Data:</li>
  <code>
    SELECT * FROM employees ORDER BY age DESC;
  </code>

  <li>Limit Results:</li>
  <code>
    SELECT * FROM employees LIMIT 5;
  </code>

  </ul>

</div>
<p className="mt-4 text-xl">
        This is a demonstration of a SQL injection in a simple login application.
        In our example, a database has been provisioned with an admin user.
        Their credentials are:
      </p>

      <div className="mt-4">
        <strong>Username : </strong>
        <input
          type="text"
          value="admin"
          className="outline-none py-1 px-3"
          placeholder={actname}
          readOnly
          ref={actnameRef}
        />
        <button
          className="outline-none bg-blue-700  hover:bg-blue-600 text-white px-3 py-0.5 ml-2"
          onClick={copyactnametocopyClipboard}
        >
          Copy
        </button>
      </div>

      <div className="mt-2">
        <strong>Password : </strong>
        <input
          type="text"
          value={actpassword}
          className="outline-none py-1 px-3"
          placeholder="Password"
          readOnly
          ref={actpassRef}
        />
        <button
          className="outline-none bg-blue-700  hover:bg-blue-600 text-white px-3 py-0.5 ml-2"
          onClick={copyactpasstocopyClipboard}
        >
          Copy
        </button>
      </div>

      <p className="text-xl">
      In theory it should only be possible to login in the application using this credential, but if the application is not safely programmed, it is possible to penetrate in the system as an admin user without knowing the admin password.
      </p>

      <div className="mt-4">
        <strong>Username : </strong>
        <input
          type="text"
          value={name}
          className="outline-none py-1 px-3"
          placeholder="Username"
          readOnly
          ref={nameRef}
        />
        <button
          className="outline-none bg-blue-700 hover:bg-blue-600 text-white px-3 py-0.5 ml-2"
          onClick={copynametocopyClipboard}
        >
          Copy
        </button>
      </div>

      <div className="mt-2">
        <strong>Password : </strong>
        <input
          type="text"
          value={password}
          className="outline-none py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passRef}
        />
        <button
          className="outline-none bg-blue-700 hover:bg-blue-600 text-white px-3 py-0.5 ml-2"
          onClick={copypasstocopyClipboard}
        >
          Copy
        </button>
      </div>
      <AccordionBasicExample/>

      <p className="mt-4 text-xl">
        Once you have played with the login application, try the following values
        and observe the SQL query displayed in the log section.
      </p>
       <Button/>
    </div>
  );
};


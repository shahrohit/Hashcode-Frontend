"use client";
import { TestCase, TestHeader } from "@/components/playground";
import { useState } from "react";

const ProblemTest = () => {
  const [showTestCase, setShowTestCase] = useState(false);
  const [maximize, setMaximize] = useState(false);

  return (
    <div
      className={`border-t-2 border-primarybdr flex flex-col transition-all duration-500 ease-in-out`}
      style={{ height: maximize ? "500px" : showTestCase ? "200px" : "3rem" }}
    >
      <TestHeader
        showTestCase={showTestCase}
        setShowTestCase={setShowTestCase}
        maximize={maximize}
        setMaximize={setMaximize}
      />
      {(showTestCase || maximize) && <TestCase />}
    </div>
  );
};

export default ProblemTest;

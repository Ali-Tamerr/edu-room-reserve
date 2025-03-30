
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-edu-blue mb-4">404</h1>
        <p className="text-xl text-slate-600 mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Button className="bg-edu-blue hover:bg-edu-darkblue" asChild>
          <Link to="/">Return to Dashboard</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;

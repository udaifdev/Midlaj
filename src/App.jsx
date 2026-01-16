import React from 'react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Wedding from "./components/Wedding";

// Placeholder for UI components if they were available
// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    {/* <TooltipProvider> */}
    {/* <Toaster /> */}
    {/* <Sonner /> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Wedding />} />
        <Route path="/portfolio" element={<div className="text-white text-center p-10">Portfolio Coming Soon</div>} />
        <Route path="*" element={<div className="text-white text-center p-10">404 - Not Found</div>} />
      </Routes>
    </BrowserRouter>
    {/* </TooltipProvider> */}
  </QueryClientProvider>
);

export default App;

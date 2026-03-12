import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ApartmentsPage from "./pages/ApartmentsPage";
import AmenitiesPage from "./pages/AmenitiesPage";
import ProcessPage from "./pages/ProcessPage";
import ContactPage from "./pages/ContactPage";
import NeighborhoodsPage from "./pages/NeighborhoodsPage";
import ConciergePage from "./pages/ConciergePage";
import OffersPage from "./pages/OffersPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/apartments" element={<ApartmentsPage />} />
          <Route path="/amenities" element={<AmenitiesPage />} />
          <Route path="/how-it-works" element={<ProcessPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/neighborhoods" element={<NeighborhoodsPage />} />
          <Route path="/concierge" element={<ConciergePage />} />
          <Route path="/offers" element={<OffersPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { useEffect } from "react";
import { useTheme } from "next-themes";
import Index from "./pages/Index";
import RoomsPage from "./pages/RoomsPage";
import AmenitiesPage from "./pages/AmenitiesPage";
import ProcessPage from "./pages/ProcessPage";
import ContactPage from "./pages/ContactPage";
import NeighborhoodsPage from "./pages/NeighborhoodsPage";
import ConciergePage from "./pages/ConciergePage";
import OffersPage from "./pages/OffersPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ThemeLogic = () => {
  const { setTheme } = useTheme();

  useEffect(() => {
    const hour = new Date().getHours();
    const isDayTime = hour >= 6 && hour < 18;
    setTheme(isDayTime ? "light" : "dark");
  }, [setTheme]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <ThemeLogic />
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/rooms" element={<RoomsPage />} />
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
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
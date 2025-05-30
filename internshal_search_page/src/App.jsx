import { useState } from "react";
import useFetchInternships from "./hooks/useFetchInternships";
import InternshipCard from "./components/InternshipCard";
import FilterPanel from "./components/FilterPanel";
import filterInternships from "./utils/filterInternships";
import "./App.css";
import {
  Container,
  Typography,
  Grid,
  CircularProgress,
  Box,
} from "@mui/material";

export default function App() {
  const { internships, loading } = useFetchInternships();

  const [filters, setFilters] = useState({
    profile: "",
    location: "",
    duration: "",
    stipend: 0,
    startDate: "",
    cityInternship: false,
    workFromHome: false,
    partTime: false,
    jobOffer: false,
    fastResponse: false,
    earlyApplicant: false,
    forWomen: false,
  });

  const filteredInternships = filterInternships(internships, filters);

  return (
    <Container maxWidth="lg" sx={{ py: 4,

    display: "flex",
    flexDirection: "column",
    alignItems: "center",}}>
      
      <Box sx={{ display: "flex",flexDirection:"column", textAlign:"right", width:"100%"}}>
     <Typography
        variant="h5"
        gutterBottom
        fontWeight="bold"
        sx={{ width: "75%", textAlign: "right", fontSize: "1.6rem" }} // Around 28px
      >
        {internships
          ? `${Object.keys(internships).length} Total Internships`
          : "Internship Search"}
      </Typography>

      <Typography
        variant="body1" // use valid MUI variant (not "p")
        sx={{ width: "73%", textAlign: "right", fontSize: "0.9rem", }}
      >
        Latest Summer Internships
      </Typography>

      </Box>

      {/* Layout Grid */}
      <Grid container spacing={3} sx={{ mt: 2 }}>
        {/* Fixed Filter Panel */}
        <Grid item xs={12} sm={3} md={3}>
          <Box
            sx={{
              position: "sticky",
              top: 100,
              maxHeight: "80vh",
              overflowY: "auto",
            }}
          >
            <FilterPanel filters={filters} setFilters={setFilters} />
          </Box>
        </Grid>

        {/* Internship Cards */}
        <Grid item xs={12} sm={9} md={9}>
          {loading ? (
            <Box display="flex" justifyContent="center" mt={4}>
              <CircularProgress />
            </Box>
          ) : filteredInternships?.length > 0 ? (
            filteredInternships.map((internship) => (
              <Box key={internship.id} mb={2}>
                <InternshipCard internship={internship} />
              </Box>
            ))
          ) : (
            <Typography variant="body1" align="center" sx={{ mt: 4 }}>
              No internships found.
            </Typography>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}

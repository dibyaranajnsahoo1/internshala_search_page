import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Box,
  Chip,
  Grid,
  Stack,
} from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import BusinessIcon from '@mui/icons-material/Business';


const InternshipCard = ({ internship }) => {
  const {
    id,
    title,
    company_name,
    company_logo,
    location_names,
    work_from_home,
    duration,
    stipend,
    start_date,
    application_deadline,
    labels_app_in_card,
    posted_by_label,
    is_premium_internship,
    office_days,
  } = internship;

  const location = work_from_home
    ? "Remote"
    : location_names?.length > 0
    ? location_names.join(", ")
    : "Location not specified";

  console.log("Internship Card Rendered:", internship);

  return (
    <Card  variant="outlined"
          sx={{
            width:'100%',
            border: 'none',
            boxShadow: 1, 
            borderRadius: 3,
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            '&:hover': {
              transform: 'scale(1.02)',
              boxShadow: 4, 
            },
          }}>
      <CardContent sx={{ px: 2, py: 1 }}>
        <Box display="flex" justifyContent="space-between" alignItems="start">
          <Box display="flex" alignItems="center" gap={2}>
            <Box>
              <Typography variant="body1">{title}</Typography>
              <Stack direction="row" alignItems="center" spacing={2}>
              <Typography variant="body2" color="text.secondary">
                {company_name}
              </Typography>

              <Stack
                direction="row"
                spacing={1}
                sx={{
                  backgroundColor: 'white',
                
                  color: 'primary.main',
                  px: 1, 
                  py: 0.5, 
                  
                }}
              >
                {labels_app_in_card?.map((label, idx) => (
                  <Chip
                    key={idx}
                    label={label}
                    size="small"
                    color="primary"
                    variant="outlined" 
                  />
                ))}
              </Stack>
            </Stack>
            </Box>
          </Box>
            {company_logo ? (
            <Avatar
              src={`https://internshala.com/static/images/company_logo/${company_logo}`}
              alt={company_name}
              sx={{ borderRadius: 2 ,
                bgcolor: 'rgba(33, 150, 243, 0.1)', 
                color: 'primary.main',   
              }}
            />
          ) : (
            <Avatar
              sx={{
                borderRadius: 2,
                bgcolor: 'rgba(33, 150, 243, 0.1)', 
                color: 'primary.main',              
              }}
            >
              <BusinessIcon fontSize="small" />
            </Avatar>
          )}

        </Box>
        <Stack direction="row" spacing={4} mt={2}>
         <Box display="flex" alignItems="center" gap={1}>
          <LocationOnOutlinedIcon fontSize="small" sx={{ color: 'text.secondary' }} />
          <Typography variant="body2">{location}</Typography>
        </Box>


          
          <Box display="flex" alignItems="center" gap={1}>
            <PaymentsOutlinedIcon fontSize="small" sx={{ color: 'text.secondary' }}/>
            <Typography variant="body2">
              {stipend?.salary || "Unpaid"}
            </Typography>
          </Box>

          <Box display="flex" alignItems="center" gap={1}>
            <CalendarTodayOutlinedIcon fontSize="small" sx={{ color: 'text.secondary' }} />
            <Typography variant="body2">{duration}</Typography>
          </Box>

        </Stack>

        <Chip
            label={posted_by_label}
            icon={<HistoryOutlinedIcon fontSize="small" />}
            size="small"
            sx={{
              marginTop: 1.5,
              height: 24,
              padding: "2px",
              backgroundColor:
                posted_by_label === "Today" || posted_by_label === "1 day ago"
                  ? "rgba(76, 175, 80, 0.1)" 
                  : "#f5f5f5",
              fontSize: "0.75rem",
              color:
                posted_by_label === "Today" || posted_by_label === "1 day ago"
                  ? "success.main"               
                  : "text.secondary",
              "& .MuiChip-icon": {
                marginLeft: 0,
                marginRight: 0,
                color:
                  posted_by_label === "Today" || posted_by_label === "1 day ago"
                    ? "success.main"
                    : "text.secondary",
              },
            }}
          />

      </CardContent>
    </Card>
  );
};

export default InternshipCard;

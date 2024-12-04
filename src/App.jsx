import {Fragment} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';
import TopAppBar from './components/TopAppBar.jsx';
import {Container} from "@mui/material";
import StaffStatusBoard from "./components/StaffStatusBoard.jsx";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import 'typeface-anton';

// Create a custom theme
const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2', // Blue
        },
        secondary: {
            main: '#9c27b0', // Purple
        },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
        h1: {
            fontFamily: 'Roboto,  sans-serif',
        },
    },
});


const StaffData = [
    {id: "EMP001", name: "Olav Nilsen", role: "Software Engineer", email: "olav.nilsen@digitalpathsnorway.no", phone: "+47 912 34 567", location: "Wessels gate 181, 7043 Trondheim, Norway", status: "in", notes: ""},
    {
        id: "EMP002",
        name: "Ingrid Johansen",
        role: "Product Manager",
        email: "ingrid.johansen@digitalpathsnorway.no",
        phone: "+47 913 45 678",
        location: "Wessels gate 181, 7043 Trondheim, Norway",
        status: "out",
        notes: "Offsite meeting"
    },
    {id: "EMP003", name: "Erik Halvorsen", role: "UX Designer", email: "erik.halvorsen@digitalpathsnorway.no", phone: "+47 914 56 789", location: "Wessels gate 181, 7043 Trondheim, Norway", status: "sick", notes: "Sick leave"},
    {id: "EMP004", name: "Astrid Berg", role: "QA Analyst", email: "astrid.berg@digitalpathsnorway.no", phone: "+47 915 67 890", location: "Wessels gate 181, 7043 Trondheim, Norway", status: "leave", notes: "Annual leave"},
    {id: "EMP005", name: "Lars Andersen", role: "IT Support Specialist", email: "lars.andersen@digitalpathsnorway.no", phone: "+47 916 78 901", location: "Wessels gate 181, 7043 Trondheim, Norway", status: "in", notes: ""},
    {id: "EMP006", name: "Kristin Holte", role: "Data Scientist", email: "kristin.holte@digitalpathsnorway.no", phone: "+47 917 89 012", location: "Wessels gate 181, 7043 Trondheim, Norway", status: "unknown", notes: ""},
    {
        id: "EMP007",
        name: "Morten Sørlie",
        role: "DevOps Engineer",
        email: "morten.sorlie@digitalpathsnorway.no",
        phone: "+47 918 90 123",
        location: "Wessels gate 181, 7043 Trondheim, Norway",
        status: "out",
        notes: "Overseas on a client visit."
    },
    {id: "EMP008", name: "Elin Vang", role: "Marketing Specialist", email: "elin.vang@digitalpathsnorway.no", phone: "+47 919 01 234", location: "Wessels gate 181, 7043 Trondheim, Norway", status: "remote", notes: "WFH"},
    {id: "EMP009", name: "Anders Fosse", role: "Frontend Developer", email: "anders.fosse@digitalpathsnorway.no", phone: "+47 920 12 345", location: "Wessels gate 181, 7043 Trondheim, Norway", status: "in", notes: ""},
    {id: "EMP010", name: "Sigrid Moen", role: "HR Specialist", email: "sigrid.moen@digitalpathsnorway.no", phone: "+47 921 23 456", location: "Wessels gate 181, 7043 Trondheim, Norway", status: "in", notes: ""},
    {id: "EMP011", name: "Tore Hansen", role: "Backend Developer", email: "tore.hansen@digitalpathsnorway.no", phone: "+47 922 34 567", location: "Wessels gate 181, 7043 Trondheim, Norway", status: "in", notes: ""},
    {
        id: "EMP012",
        name: "Liv Solberg",
        role: "Content Writer",
        email: "liv.solberg@digitalpathsnorway.no",
        phone: "+47 923 45 678",
        location: "Wessels gate 181, 7043 Trondheim, Norway",
        status: "out",
        notes: "Participating in an external workshop."
    },
    {id: "EMP013", name: "Jonas Eik", role: "Security Specialist", email: "jonas.eik@digitalpathsnorway.no", phone: "+47 924 56 789", location: "Wessels gate 181, 7043 Trondheim, Norway", status: "remote", notes: "WFH"},
    {id: "EMP014", name: "Kari Lunde", role: "Graphic Designer", email: "kari.lunde@digitalpathsnorway.no", phone: "+47 925 67 890", location: "Wessels gate 181, 7043 Trondheim, Norway", status: "in", notes: ""},
    {
        id: "EMP015",
        name: "Henrik Aas",
        role: "Operations Manager",
        email: "henrik.aas@digitalpathsnorway.no",
        phone: "+47 926 78 901",
        location: "Wessels gate 181, 7043 Trondheim, Norway",
        status: "on-call",
        notes: "Available for urgent matters"
    },
    {id: "EMP016", name: "Solveig Nygård", role: "Full Stack Developer", email: "solveig.nygard@digitalpathsnorway.no", phone: "+47 927 89 012", location: "Wessels gate 181, 7043 Trondheim, Norway", status: "in", notes: ""},
    {id: "EMP017", name: "Eirik Viken", role: "Cloud Architect", email: "eirik.viken@digitalpathsnorway.no", phone: "+47 928 90 123", location: "Wessels gate 181, 7043 Trondheim, Norway", status: "on-leave", notes: "Leave"},
    {id: "EMP018", name: "Annika Lien", role: "Business Analyst", email: "annika.lien@digitalpathsnorway.no", phone: "+47 929 01 234", location: "Wessels gate 181, 7043 Trondheim, Norway", status: "in", notes: ""},
    {id: "EMP019", name: "Oskar Fjell", role: "Technical Lead", email: "oskar.fjell@digitalpathsnorway.no", phone: "+47 930 12 345", location: "Wessels gate 181, 7043 Trondheim, Norway", status: "remote", notes: "WFH"},
    {id: "EMP020", name: "Vilde Strøm", role: "Data Engineer", email: "vilde.strom@digitalpathsnorway.no", phone: "+47 931 23 456", location: "Wessels gate 181, 7043 Trondheim, Norway", status: "in", notes: ""}
];

function App() {
    return (
        <Fragment>
            <ThemeProvider theme={theme}>
            <CssBaseline/>
            <TopAppBar/>
            <Container maxWidth={false} sx={{ padding: 4 }}>
                <main>
                    <StaffStatusBoard staff={StaffData} interval={20000} />
                </main>
            </Container>
                </ThemeProvider>
        </Fragment>
    );
}

export default App;
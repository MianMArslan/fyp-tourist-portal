import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import RingLoader from "react-spinners/RingLoader";
import { css } from "@emotion/react";
import "./style.css";
import { GET } from "../../services/httpClient";
import tz from "moment-timezone";
import Badge from "@mui/material/Badge";
import ViewDialog from "./ViewAdDialog/index";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fb9e00",
    },
  },
});
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function OrderDetailDialog(props) {
  const { setViewOrder } = props;
  const [open, setOpen] = React.useState(true);
  const [rows, setRows] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [viewDialog, setViewDialog] = React.useState(false);
  const [data, setData] = React.useState();
  const handleClose = () => {
    setOpen(false);
    setViewOrder(false);
  };

  const getBooking = async () => {
    let res = await GET("/tourist/booking");
    if (res.length) {
      setRows(res);
      setLoading(false);
    }
  };
  const viewAdDetail = () => {
    setViewDialog(true);
  };
  React.useEffect(() => {
    setTimeout(() => {
      getBooking();
    }, 2000);
  }, []);
  console.log(rows);
  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }} theme={theme}>
          <Toolbar className="orderDetail">
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h5">Orders Detail</Typography>
          </Toolbar>
        </AppBar>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell align="center">Booking Name</TableCell>
                <TableCell align="center">Phone</TableCell>
                <TableCell align="center">Description&nbsp;</TableCell>
                <TableCell align="center">Request Date&nbsp;</TableCell>
                <TableCell align="center">Ad Detail&nbsp;</TableCell>
                <TableCell align="center">Status&nbsp;</TableCell>
              </TableRow>
            </TableHead>
            {!loading && (
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell align="center">{row.name}</TableCell>
                    <TableCell align="center">{row.phone}</TableCell>
                    <TableCell align="center">{row.description}</TableCell>
                    <TableCell align="center">
                      {tz(row.createdAt).format("MMM Do YY")}
                    </TableCell>
                    <TableCell align="center">
                      <Button
                        variant="outlined"
                        color="warning"
                        onClick={() => {
                          setData(row.ad);
                          setViewDialog(true);
                        }}
                      >
                        View
                      </Button>
                    </TableCell>
                    <TableCell align="center">
                      {row.status === "pending" && (
                        <Badge
                          color="secondary"
                          badgeContent={row.status}
                        ></Badge>
                      )}
                      {row.status === "accept" && (
                        <Badge
                          color="warning"
                          badgeContent={row.status}
                        ></Badge>
                      )}
                      {row.status === "reject" && (
                        <Badge color="error" badgeContent={row.status}></Badge>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            )}
          </Table>
        </TableContainer>
        {loading && (
          <Box
            style={{
              height: "100%",
              width: "100",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <RingLoader color={"#fb9e00"} css={override} loading={loading} />
          </Box>
        )}
      </Dialog>
      {viewDialog && (
        <ViewDialog dialogData={data} updateState={setViewDialog} />
      )}
    </div>
  );
}

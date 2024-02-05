import { deepMerge } from "grommet/utils";
import React from "react";
import {
  Box,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Grid,
  grommet,
  DateInput,
  Grommet,
  Heading,
  Page,
  PageContent,
  PageHeader,
  Paragraph,
  ResponsiveContext,
  Text,
} from "grommet";

const App = () => {
  const theme = deepMerge(grommet, {
    global: {
      colors: {
        brand: "#228BE6",
      },
      font: {
        family: "Roboto",
        size: "14px",
        height: "20px",
      },
    },
  });

  const [value, setValue] = React.useState(new Date().toISOString());
  const onChange = (event) => {
    const nextValue = event.value;
    setValue(nextValue);
  };
  const apiDates = [4, 7, 13, 29];
  return (
    <Grommet theme={theme} full themeMode={"dark"}>
      <main>
        <Box align="center" pad="large">
          <DateInput
            format="mm/dd/yyyy"
            size="medium"
            style={{ height: "80px", width: "200px" }}
            value={value}
            calendarProps={{
              header(args) {
                console.log(args, "calendar props");
                return (
                  <button
                    onClick={() => {
                      console.log("header netx click");
                      args.onPreviousMonth();
                    }}
                  >
                    Kumbhans Header
                  </button>
                );
              },
              children: (e) => {
                const selectedDate = new Date(e.date).getDate();
                if (apiDates.includes(selectedDate)) {
                  return (
                    <button
                      key={selectedDate}
                      onClick={() => {
                        console.log(selectedDate, "selected date ");
                      }}
                      className="selectedDate date w-8 h-8 bg-red-600"
                    >
                      {selectedDate}
                    </button>
                  );
                }
                return (
                  <button
                    key={selectedDate}
                    onClick={() => {
                      console.log(selectedDate, "selected date ");
                    }}
                    className="relative date w-8 h-8 bg-blue-400"
                  >
                    {selectedDate}
                  </button>
                );
              },
            }}
            onChange={onChange}
          />
        </Box>
      </main>
    </Grommet>
  );
};

export default App;

import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "../../assets/images/icons/ArrowRight";

export default function AccordionPlayground() {
  const [config, setConfig] = useState({
    // Root
    marginBottom: 16,
    border: "1px solid #ccc",
    borderRadius: 8,
    backgroundColor: "#ffffff",
    boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
    paddingTop: 8,
    paddingRight: 8,
    paddingBottom: 8,
    paddingLeft: 8,

    // Summary (title)
    titleBg: "#f5f5f5",
    titlePadding: 8,
    titleFontSize: 16,
    titleFontWeight: 500,
    titleColor: "#000000",
    spacingTitleDesc: 8,

    // Details (desc)
    descBg: "#ffffff",
    descPadding: 8,
    descFontSize: 14,
    descColor: "#333333",

    // Props
    defaultExpanded: true,
    transitionDuration: 300,
    disableGutters: false,
    square: false,
    elevation: 0,
  });

  const handleChange = (field) => (e) => {
    const isCheckbox = e.target.type === "checkbox";
    const raw = isCheckbox ? e.target.checked : e.target.value;
    const numericFields = new Set([
      "marginBottom",
      "borderRadius",
      "paddingTop",
      "paddingRight",
      "paddingBottom",
      "paddingLeft",
      "titlePadding",
      "titleFontSize",
      "titleFontWeight",
      "spacingTitleDesc",
      "descPadding",
      "descFontSize",
      "transitionDuration",
      "elevation",
    ]);
    setConfig((prev) => ({
      ...prev,
      [field]: numericFields.has(field) && raw !== "" ? Number(raw) : raw,
    }));
  };

  // ---------- Generated code blocks ----------
  const styleOverridesCode = `
export const MuiAccordion = {
  styleOverrides: {
    root: ({ theme }) => ({
      marginBottom: "${config.marginBottom}px",
      border: "${config.border}",
      borderRadius: "${config.borderRadius}px",
      backgroundColor: "${config.backgroundColor}",
      boxShadow: "${config.boxShadow}",
      paddingTop: "${config.paddingTop}px",
      paddingRight: "${config.paddingRight}px",
      paddingBottom: "${config.paddingBottom}px",
      paddingLeft: "${config.paddingLeft}px",
    }),
  },
};

export const MuiAccordionSummary = {
  styleOverrides: {
    root: ({ theme }) => ({
      backgroundColor: "${config.titleBg}",
      padding: "${config.titlePadding}px",
      fontSize: "${config.titleFontSize}px",
      fontWeight: ${config.titleFontWeight},
      color: "${config.titleColor}",
      marginBottom: "${config.spacingTitleDesc}px",
      minHeight: "unset",
      "& .MuiAccordionSummary-content": { margin: 0 },
    }),
  },
};

export const MuiAccordionDetails = {
  styleOverrides: {
    root: ({ theme }) => ({
      backgroundColor: "${config.descBg}",
      padding: "${config.descPadding}px",
      fontSize: "${config.descFontSize}px",
      color: "${config.descColor}",
    }),
  },
};
`.trim();

  const accordionJsxCode = `
import React from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function CustomAccordion() {
  return (
    <>
      <Accordion
        defaultExpanded={${config.defaultExpanded}}
        TransitionProps={{ timeout: ${config.transitionDuration} }}
        disableGutters={${config.disableGutters}}
        square={${config.square}}
        elevation={${config.elevation}}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">Expanded by default</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        TransitionProps={{ timeout: ${config.transitionDuration} }}
        disableGutters={${config.disableGutters}}
        square={${config.square}}
        elevation={${config.elevation}}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">Second Accordion</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You can adjust styles via theme overrides for summary and details.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
`.trim();

  // ---------- Styles applied to live preview via sx ----------
  const previewSx = {
    mb: `${config.marginBottom}px`,
    border: config.border,
    borderRadius: `${config.borderRadius}px`,
    backgroundColor: config.backgroundColor,
    boxShadow: config.boxShadow,
    pt: `${config.paddingTop}px`,
    pr: `${config.paddingRight}px`,
    pb: `${config.paddingBottom}px`,
    pl: `${config.paddingLeft}px`,
    "& .MuiAccordionSummary-root": {
      backgroundColor: config.titleBg,
      padding: `${config.titlePadding}px`,
      fontSize: `${config.titleFontSize}px`,
      fontWeight: config.titleFontWeight,
      color: config.titleColor,
      marginBottom: `${config.spacingTitleDesc}px`,
      minHeight: "unset",
      "& .MuiAccordionSummary-content": { margin: 0 },
    },
    "& .MuiAccordionDetails-root": {
      backgroundColor: config.descBg,
      padding: `${config.descPadding}px`,
      fontSize: `${config.descFontSize}px`,
      color: config.descColor,
    },
  };

  return (
    <div style={{ display: "flex", gap: 24, padding: 16 }} className="accordion-container">
      {/* Controls */}
      <div style={{ width: 320 }}>
        <h3>Accordion Playground</h3>

        {/* Root */}
        <TextField fullWidth label="Margin Bottom (px)" type="number" value={config.marginBottom} onChange={handleChange("marginBottom")} margin="dense" />
        <TextField fullWidth label="Border (css)" value={config.border} onChange={handleChange("border")} margin="dense" />
        <TextField fullWidth label="Border Radius (px)" type="number" value={config.borderRadius} onChange={handleChange("borderRadius")} margin="dense" />
        <TextField fullWidth label="Box Shadow (css)" value={config.boxShadow} onChange={handleChange("boxShadow")} margin="dense" />
        <TextField fullWidth label="Accordion BG" type="color" value={config.backgroundColor} onChange={handleChange("backgroundColor")} margin="dense" />
        <TextField fullWidth label="Padding Top (px)" type="number" value={config.paddingTop} onChange={handleChange("paddingTop")} margin="dense" />
        <TextField fullWidth label="Padding Right (px)" type="number" value={config.paddingRight} onChange={handleChange("paddingRight")} margin="dense" />
        <TextField fullWidth label="Padding Bottom (px)" type="number" value={config.paddingBottom} onChange={handleChange("paddingBottom")} margin="dense" />
        <TextField fullWidth label="Padding Left (px)" type="number" value={config.paddingLeft} onChange={handleChange("paddingLeft")} margin="dense" />

        {/* Summary */}
        <h4 style={{ marginTop: 16 }}>Summary (Title)</h4>
        <TextField fullWidth label="Title BG" type="color" value={config.titleBg} onChange={handleChange("titleBg")} margin="dense" />
        <TextField fullWidth label="Title Padding (px)" type="number" value={config.titlePadding} onChange={handleChange("titlePadding")} margin="dense" />
        <TextField fullWidth label="Title Font Size (px)" type="number" value={config.titleFontSize} onChange={handleChange("titleFontSize")} margin="dense" />
        <TextField fullWidth label="Title Font Weight" type="number" value={config.titleFontWeight} onChange={handleChange("titleFontWeight")} margin="dense" />
        <TextField fullWidth label="Title Color" type="color" value={config.titleColor} onChange={handleChange("titleColor")} margin="dense" />
        <TextField fullWidth label="Spacing Title ↔ Desc (px)" type="number" value={config.spacingTitleDesc} onChange={handleChange("spacingTitleDesc")} margin="dense" />

        {/* Details */}
        <h4 style={{ marginTop: 16 }}>Details (Description)</h4>
        <TextField fullWidth label="Desc BG" type="color" value={config.descBg} onChange={handleChange("descBg")} margin="dense" />
        <TextField fullWidth label="Desc Padding (px)" type="number" value={config.descPadding} onChange={handleChange("descPadding")} margin="dense" />
        <TextField fullWidth label="Desc Font Size (px)" type="number" value={config.descFontSize} onChange={handleChange("descFontSize")} margin="dense" />
        <TextField fullWidth label="Desc Color" type="color" value={config.descColor} onChange={handleChange("descColor")} margin="dense" />

        {/* Props */}
        <h4 style={{ marginTop: 16 }}>Props</h4>
        <FormControlLabel control={<Checkbox checked={config.defaultExpanded} onChange={handleChange("defaultExpanded")} />} label="Default Expanded (Acc 1)" />
        <TextField fullWidth label="Transition Duration (ms)" type="number" value={config.transitionDuration} onChange={handleChange("transitionDuration")} margin="dense" />
        <FormControlLabel control={<Checkbox checked={config.disableGutters} onChange={handleChange("disableGutters")} />} label="Disable Gutters" />
        <FormControlLabel control={<Checkbox checked={config.square} onChange={handleChange("square")} />} label="Square" />
        <TextField fullWidth label="Elevation" type="number" value={config.elevation} onChange={handleChange("elevation")} margin="dense" />
      </div>

      {/* Preview + Code */}
      <div style={{ flex: 1 }}>
        <h3>Live Preview</h3>

        <Accordion
          defaultExpanded={config.defaultExpanded}
          TransitionProps={{ timeout: config.transitionDuration }}
          disableGutters={config.disableGutters}
          square={config.square}
          elevation={config.elevation}
          sx={previewSx}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography component="span">Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              This is the first accordion content. You can style it with theme overrides.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          TransitionProps={{ timeout: config.transitionDuration }}
          disableGutters={config.disableGutters}
          square={config.square}
          elevation={config.elevation}
          sx={previewSx}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography component="span">Accordion 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              This is the second accordion content. You can style it with theme overrides.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <h3 style={{ marginTop: 16 }}>Generated Style Overrides</h3>
        <pre style={{ background: "#f4f4f4", padding: 12, borderRadius: 8, overflowX: "auto" }}>
{styleOverridesCode}
        </pre>
        <Button
          variant="contained"
          size="small"
          onClick={() => navigator.clipboard.writeText(styleOverridesCode)}
          sx={{ mt: 1, mb: 3 }}
        >
          Copy Style Overrides
        </Button>

        <h3>Generated Accordion JSX</h3>
        <pre style={{ background: "#f4f4f4", padding: 12, borderRadius: 8, overflowX: "auto" }}>
{accordionJsxCode}
        </pre>
        <Button
          variant="contained"
          size="small"
          onClick={() => navigator.clipboard.writeText(accordionJsxCode)}
          sx={{ mt: 1 }}
        >
          Copy JSX
        </Button>
      </div>
    </div>
  );
}

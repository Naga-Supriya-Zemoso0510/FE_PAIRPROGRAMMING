import { Grid, Stack } from "@mui/material";
import theme from "../../../theme/theme";
import styled from "@emotion/styled";

interface TemplateLayoutProps {
  children?: React.ReactNode;
  leftImage?: React.ReactNode;
}

const StyledPaper = styled(Grid)({
  width: '100%',
  minHeight: '100vh',
});

const StyledStack=styled(Stack)({
  display:'flex',
   flexDirection:"row",
   justifyContent:'space-between'
})

const StyledImageGrid=styled(Grid)({
  marginLeft:theme.spacing(45),
  marginTop:theme.spacing(55)
})

const StyledChildrenGrid=styled(Grid)(
  ({ scrollableContent }: { scrollableContent: React.ReactNode }) => ({
    gridArea: "children",
    border: scrollableContent ? "none" : "1px solid grey",
    width:theme.spacing(120),
    height:theme.spacing(168),
    margin:`${theme.spacing(12)} ${theme.spacing(32)}}`,
    scrollbarWidth: "thin",
    scrollbarColor: "transparent transparent",
  })
)

const SignInTemplate = ({ children, leftImage }: TemplateLayoutProps) => {
  return (
    <StyledPaper>
      <StyledStack>
        <StyledImageGrid item>
          {leftImage ?? 'Left Side Image'}
        </StyledImageGrid>
        <StyledChildrenGrid scrollableContent={children} item>
          {children ??'Children'}
        </StyledChildrenGrid>
      </StyledStack>
    </StyledPaper>
  );
};

export default SignInTemplate;

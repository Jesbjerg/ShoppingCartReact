import React, { FunctionComponent } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import DropDown from "../DropDown/DropDown";
import "./ListCard.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

type ListCardProps = {
  title: string;
  description: string;
};

export const ListCard: FunctionComponent<ListCardProps> = ({
  title,
  description,
}) => {
  return (
    <Card className="card">
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Banana"
          height="140"
          image={require("../../testImages/test-banana.jpg")}
          title="Banana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="multicard-actions">
        <Button size="large" color="primary" variant="contained">
          Add
          <ShoppingCartIcon
            style={{ color: "#fff" }}
            color="disabled"
            fontSize="small"
          ></ShoppingCartIcon>
        </Button>
        <DropDown></DropDown>
      </CardActions>
    </Card>
  );
};

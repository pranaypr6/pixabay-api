import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import { Avatar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const Image = ({ img, setModalImg, handleOpen }) => {
  const classes = useStyles();
  return (
    <div style={{ margin: "1em 1em" }}>
      <Card
        className={classes.root}
        style={{ height: "300px", width: "300px" }}
      >
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              <img src={img.userImageURL} alt="" />
            </Avatar>
          }
          title={img.user}
          subheader="Shot"
        />
        <CardMedia
          className={classes.media}
          image={img.largeImageURL}
          title={img.tags}
          style={{ cursor: "pointer" }}
          onClick={() => {
            setModalImg(img.largeImageURL);
            handleOpen();
          }}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            From{" "}
            <a href={img.pageURL} target="blank" className="credits">
              pixabay
            </a>
          </Typography>
        </CardContent>
        <CardActions disableSpacing></CardActions>
      </Card>
    </div>
  );
};

export default Image;

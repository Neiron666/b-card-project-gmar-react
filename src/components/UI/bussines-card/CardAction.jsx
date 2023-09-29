import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PhoneIcon from "@mui/icons-material/Phone";
import React, { useContext } from "react";
import CardsStoreContext from "../../../store-context/CardsStoreContext";
import { Link } from "react-router-dom";

const CardAction = (props) => {
  const ctx = useContext(CardsStoreContext);
  const deleteHandler = () => {
    ctx.onDeleteFavCard(props.id);
    ctx.onDeleteCard(props.id);
  };
  const addFavCardHandler = () => {
    ctx.onAddFavCard(props.id);
  };
  const editCardHandler = () => {
    ctx.onEditCardActive(props.id);
  };

  return (
    <div className={props.className}>
      <span>
        <IconButton aria-label="delete card" onClick={deleteHandler}>
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="edit card" onClick={editCardHandler}>
          <Link to="/edit-card-page" style={{ color: "gray" }}>
            <ModeEditIcon />
          </Link>
        </IconButton>
      </span>

      <span>
        <IconButton aria-label="call business" onClick={() => {}}>
          <PhoneIcon />
        </IconButton>
        <IconButton aria-label="favorite card" onClick={addFavCardHandler}>
          <FavoriteIcon
            color={ctx.isCardFavorite(props.id) ? "error" : "disabled"}
          />
        </IconButton>
      </span>
    </div>
  );
};

export default CardAction;

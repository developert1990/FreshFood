import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import sanitizeHtml from 'sanitize-html';

import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        height: 380
    },
    media: {
        height: 240,
    },
});

export const ItemCard = ({ foods, addToCartAPI }) => {
    console.log(`foods`, foods)
    const classes = useStyles();
    const [vitamin, setVitamin] = useState({
        vitaminData: '',
        image: '',
    });

    const handleClick = (food) => {
        const qty = 1;
        if (food.title !== "Vitamin A") {
            const { id, image, title, variants } = food;
            const { price } = variants[0];
            addToCartAPI({ id, image, title, price, qty });
        } else {
            const { vitaminData } = vitamin;
            const splited = vitaminData.split("&");
            console.log(`splited`, splited)
            const obj = {
                id: splited[0],
                title: splited[1],
                price: splited[2],
            };
            const { id, title, price } = obj;
            if (id === "") {
                return alert('Please choose one vitamin');
            }
            const image = foods[foods.length - 1].image;
            addToCartAPI({ id: parseInt(id), image, title, price, qty });
        }
    }


    const handleChange = (event) => {
        console.log(`event.target.value ==>> `, event.target.value)
        setVitamin({
            ...vitamin,
            vitaminData: event.target.value,
        });
    };

    console.log(`vitamin`, vitamin)
    return (
        <div className="ItemCard">{
            foods.length > 0 && foods.map((food, index) => {
                const clean = sanitizeHtml(food.body_html, { allowedTags: ['meta', 'span', 'br'] })
                return (
                    <div className="signleItemCard" key={index}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={food.image}
                                    title={food.title}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {food.title}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        <span dangerouslySetInnerHTML={{ __html: clean }} />
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="large" color="primary" onClick={() => handleClick(food)}>
                                    Add to Cart
                                </Button>
                                {
                                    food.title === "Vitamin A" &&
                                    <FormControl variant="outlined" className={classes.formControl}>
                                        <InputLabel htmlFor="outlined-age-native-simple">Vitamin A</InputLabel>
                                        <Select
                                            native
                                            value={vitamin.value}
                                            onChange={handleChange}
                                            inputProps={{
                                                name: vitamin.title,
                                            }}
                                        >
                                            <option aria-label="None" value="" />
                                            {
                                                food.variants.map((variant, index) => {
                                                    return (
                                                        <>
                                                            <option key={index} value={`${variant.id}&${variant.title}&${variant.price}`} name={variant.title}>{variant.title} - ${variant.price}</option>
                                                        </>
                                                    )
                                                })
                                            }
                                        </Select>
                                    </FormControl>
                                }
                            </CardActions>
                        </Card>
                    </div>
                )
            })
        }

        </div>
    )
}

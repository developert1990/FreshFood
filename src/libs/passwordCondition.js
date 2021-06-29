// if valid
const valid = (item, v_icon, inv_icon) => {
    let text = document.querySelector(`#${item}`);
    text.style.opacity = "1";
    text.style.color = "#2AC1BC"

    let valid_icon = document.querySelector(`#${item} .${v_icon}`);
    valid_icon.style.opacity = "1";
    valid_icon.style.color = "#2AC1BC"

    let invalid_icon = document.querySelector(`#${item} .${inv_icon}`);
    invalid_icon.style.opacity = "0";
    invalid_icon.style.color = "#2AC1BC"
}
// if invalid
const invalid = (item, v_icon, inv_icon) => {
    let text = document.querySelector(`#${item}`);
    text.style.opacity = ".5";
    text.style.color = "#ff4e50";

    let valid_icon = document.querySelector(`#${item} .${v_icon}`);
    valid_icon.style.opacity = "0";
    valid_icon.style.color = "#ff4e50";

    let invalid_icon = document.querySelector(`#${item} .${inv_icon}`);
    invalid_icon.style.opacity = "1";
    invalid_icon.style.color = "#ff4e50";
}

export const passwordCondition = (password, setPwCondition_first, setPwCondition_second, setPwCondition_third, setPwCondition_forth) => {
    if (password.match(/[A-z]/) != null) {
        valid("capital", "fa-check", "fa-times");
        setPwCondition_first(true)
    } else {
        invalid("capital", "fa-check", "fa-times");
        setPwCondition_first(false)
    }
    if (password.match(/[0-9]/) != null) {
        valid("num", "fa-check", "fa-times");
        setPwCondition_second(true)
    } else {
        invalid("num", "fa-check", "fa-times");
        setPwCondition_second(false)
    }
    if (password.match(/[!@#$%^&*]/) != null) {
        valid("char", "fa-check", "fa-times");
        setPwCondition_third(true)
    } else {
        invalid("char", "fa-check", "fa-times");
        setPwCondition_third(false)
    }
    if (password.length > 7) {
        valid("more8", "fa-check", "fa-times");
        setPwCondition_forth(true)
    } else {
        invalid("more8", "fa-check", "fa-times");
        setPwCondition_forth(false)
    }
};

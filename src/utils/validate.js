export const validate = (data) => {

    const errors = {};
    if (!data.name.trim()) {
        errors.name = "Username required"
    } else {
        delete errors.name
    }
    if (!data.email) {
        errors.email = "Email required"
    } else if (!/\s+@\s+\.\s+/.test(data.email)) {
        errors.email = "email you is invalid"
    } else {
        delete errors.email
    }

    if (!data.password) {
        errors.password = "Password required"
    } else if (data.password.length < 6) {
        errors.password = "Password need to be 6 character"
    } else {
        delete errors.password
    }

    if (!data.confirmPassword) {
        errors.confirmPassword = "Confirm the password"
    } else if (data.confirmPassword !== data.password) {
        errors.confirmPassword = "Password do not match"
    } else {
        delete errors.confirmPassword
    }

    if (data.isAccepted) {
        delete errors.isAccepted
    } else {
        errors.isAccepted = "Accepted our regulations"
    }
    return errors;
}
const comRegistration = {
    data() {
        return {
        };
    },
    template: `
    <form class="registration center">
    <div class="registration__data">
        <label class="registration__p " for="first_name">Your Name</label>
        <input class="registration__input" type="text" placeholder="First Name" autofocus required id="first_name">
        <input class="registration__input" type="text" placeholder="Last Name" required id="last_name">
        <div class="registration__gender__box">
            <label class="registration__gender" for="male"><input class="registration__gender__input" type="radio" name="gender" id="male">Male</label>
            <label class="registration__gender" for="female"><input class="registration__gender__input" type="radio" name="gender" id="female">Female</label>
        </div>
        <label class="registration__p" for="email">Login details</label>
        <input class="registration__input" type="email" placeholder="Email" required id="email">
        <input class="registration__input" type="password" placeholder="Password" required id="password">
        <p class="registration__help ">Please use 8 or more characters, with at least 1 number and a mixture of uppercase and lowercase letters</p>
        <input class="registration__submit" type="submit" value="JOIN NOW →">
    </div>
    <div class="registration__info">
        <article>LOYALTY HAS ITS PERKS</article>
        <ul class="registration__list">Get in on the loyalty program where you can earn points and unlock serious perks. Starting with these as soon as you join:
            <li class="registration__list__item">15% off welcome offer</li>
            <li class="registration__list__item">Free shipping, returns and exchanges on all orders </li>
            <li class="registration__list__item">$10 off a purchase on your birthday </li>
            <li class="registration__list__item">Early access to products</li>
            <li class="registration__list__item">Exclusive offers & rewards</li>
        </ul>
    </div>
</form>
    `,
    created() {

    }
};
export default comRegistration;
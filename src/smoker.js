
const smoker = () => {
    let _onFire;
    return {
        isSmoking: () => _onFire,
        setOnFire: () => _onFire = true,
        extingGuish: () => _onFire = false
    }
};

export { smoker };
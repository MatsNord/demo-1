const fireplace = {
    firewood: {},
    onFire: false,
    isSmoking: () => fireplace.onFire,
    setOnfire: () => fireplace.onFire = true
};

export { fireplace } ;
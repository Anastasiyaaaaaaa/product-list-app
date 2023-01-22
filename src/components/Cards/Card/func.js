export const getCardClass = (isAvailable, isSelected) => {
    return `card_${isAvailable ?
        isSelected ? 'selected' : 'default' :
        'disable'}`;
}
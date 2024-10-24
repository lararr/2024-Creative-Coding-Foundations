
const buttonSankha = document.getElementById('button-Sankha');
const buttonSrivatsa= document.getElementById('button-Srivatsa');
const buttonGaurmatsya = document.getElementById('button-Gaurmatsya');
const buttonLotus= document.getElementById('button-Lotus');
const buttonDharma = document.getElementById('button-Dharma');
const buttonBuddha= document.getElementById('button-Buddha');
const buttonTao = document.getElementById('button-Tao');
const buttonOm= document.getElementById('button-Om');


const titleParagraph = document.getElementById('title');
const textParagraph = document.getElementById('text');

buttonSankha.addEventListener('click', () => {
    titleParagraph.innerText = "The Shell";
    textParagraph.innerText = "Its original Sanskrit name is Sankha. Since ancient times it has been used as a musical instrument and in Buddhism it takes on the meaning of the melody of the Dharma, the profound sound of the Buddha's teachings";

})

buttonSrivatsa.addEventListener('click', () => {
    titleParagraph.innerText = "The Infinite Knot";
    textParagraph.innerText = "In Sanskrit his name is Srivatsa. It is composed of lines without a beginning and without an end, which intersect each other and represents the interconnections and the infinite cycle of cause and effect";

})

buttonLotus.addEventListener('click', () => {
    titleParagraph.innerText = "The Lotus Flower";
    textParagraph.innerText = "The Lotus Flower is very important in oriental symbolism: the roots of this flower are immersed in mud, in fact it grows naturally in ponds, immerses itself in water every night and blooms again the next morning perfectly clean";

})

buttonDharma.addEventListener('click', () => {
    titleParagraph.innerText = "The Wheel of Dharma";
    textParagraph.innerText = "The Wheel of Dharma symbolizes the Dharma that moves cyclically without a beginning or an end and its meaning refers to the wheel understood as a weapon, capable of taking away all the obstacles that prevent men from freeing themselves from suffering";
})

buttonGaurmatsya.addEventListener('click', () => {
    titleParagraph.innerText = "The Two Fish";
    textParagraph.innerText = "The Two Fish, called Gaurmatsya in Sanskrit, are often represented vertical and parallel to each other and represent the absence of fear and the ability to move through suffering since ultimately we also have the awareness that leads to salvation";
})

buttonTao.addEventListener('click', () => {
    titleParagraph.innerText = "Tao";
    textParagraph.innerText = "It represents yin and yang, the passage of time, cyclicality but also the movement that oscillates between the two extremes, indicated by its halves, which indicate two opposite but complementary concepts, such as the feminine and the masculine or the light and the darkness";
})

buttonOm.addEventListener('click', () => {
    titleParagraph.innerText = "Om";
    textParagraph.innerText = "Om is a sacred syllable which is denoted by ॐ and is considered the mantra of all other mantras. It is said to be the sound that created the entire universe. Precisely for this reason the Om mantra is also called pranava mantra, or primordial mantra";
})

buttonBuddha.addEventListener('click', () => {
    titleParagraph.innerText = "The Buddha";
    textParagraph.innerText = "Buddha is who has attained Bodhi; and by Bodhi is meant wisdom, an ideal state of intellectual and ethical perfection which can be achieved by man through purely human means. The term Buddha literally means enlightened one, a knower";
})


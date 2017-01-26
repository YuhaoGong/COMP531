//author: Yuhao Gong
//Name: Main.js

//get the button element by ID
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");

//check if button is pressed
btn1.onclick = function() {
	if (btn1.innerHTML == "Stop")
		stoptdInterval()
	else if (btn1.innerHTML == "Start")
		starttdInterval()
}

btn2.onclick = function() {
	if (btn2.innerHTML == "Stop")
		stopmgInterval()
	else if (btn2.innerHTML == "Start")
		startmgInterval()
}

btn3.onclick = function() {
	if (btn3.innerHTML == "Stop")
		stoptpInterval()
	else if (btn3.innerHTML == "Start")
		starttpInterval()
}

btn4.onclick = function() {
	if (btn4.innerHTML == "Stop")
		stopklInterval()
	else if (btn4.innerHTML == "Start")
		startklInterval()
}

//picture sources and set and clear interval function
var tdimages = new Array()
   tdimages[0] = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Tim_Duncan.jpg/800px-Tim_Duncan.jpg"
   tdimages[1] = "http://itsnotaboutme.tv/news/wp-content/uploads/2016/07/tim-duncan-5-championships.jpg";
   tdimages[2] = "http://i.onionstatic.com/onion/2654/4/16x9/1200.jpg";
   tdimages[3] = "http://gazettereview.com/wp-content/uploads/2016/12/tim-duncan.jpg";
function starttdInterval()
{
	timertd = setInterval("changeImagetd()", Math.floor((Math.random() * 5) + 1) * 1000);
	btn1.innerHTML = "Stop";
}
function stoptdInterval()
{
	clearInterval(timertd);
	btn1.innerHTML = "Start";
}
var timertd = setInterval("changeImagetd()", Math.floor((Math.random() * 5) + 1) * 1000);

var mgimages = new Array()
   mgimages[0] = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Manu_Gin%C3%B3bili_%28cropped_2%29.jpg/800px-Manu_Gin%C3%B3bili_%28cropped_2%29.jpg"
   mgimages[1] = "https://i.ytimg.com/vi/8LTgStJw9ao/maxresdefault.jpg";
   mgimages[2] = "http://www.basketwallpapers.com/Images-12/Manu-Ginobili-2013-Playoffs-2560x1600-BasketWallpapers.com-.jpg";
   mgimages[3] = "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRHntwTHjwbYAcJF1DrHzU0kXuEVfiGU-GsQaNmLs13cMpSWX0H";
function startmgInterval()
{
	timermg = setInterval("changeImagemg()", Math.floor((Math.random() * 5) + 1) * 1000);
	btn2.innerHTML = "Stop";
}
function stopmgInterval()
{
	clearInterval(timermg);
	btn2.innerHTML = "Start";
}
var timermg = setInterval("changeImagemg()", Math.floor((Math.random() * 5) + 1) * 1000);

var tpimages = new Array()
   tpimages[0] = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Parker_khomar.JPG/800px-Parker_khomar.JPG"
   tpimages[1] = "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTPs61swO2uzYfk8dHh3oPzN76gwn79hYvI0PR9Kn9g7F1MSfaV4g";
   tpimages[2] = "http://www.athletepromotions.com/blog/wp-content/uploads/2014/07/Tony-Parker1.jpg";
   tpimages[3] = "http://www1.pictures.zimbio.com/gi/Tony+Parker+San+Antonio+Spurs+v+Golden+State+y7irhQya3y-l.jpg";
function starttpInterval()
{
	timertp = setInterval("changeImagetp()", Math.floor((Math.random() * 5) + 1) * 1000);
	btn3.innerHTML = "Stop";
}
function stoptpInterval()
{
	clearInterval(timertp);
	btn3.innerHTML = "Start";
}
var timertp = setInterval("changeImagetp()", Math.floor((Math.random() * 5) + 1) * 1000);

var klimages = new Array()
   klimages[0] = "https://coachchambers.files.wordpress.com/2016/03/hi-res-7e3634f6cc7488ba85dbb9dfb5836c05_crop_exact.jpg?w=1500&h=1500&crop=1"
   klimages[1] = "https://s-media-cache-ak0.pinimg.com/564x/3b/ba/79/3bba7922ae06a62bf5be861f356e912f.jpg";
   klimages[2] = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSExIVFRUVFxUVFRYVGBUVFxUVFRUXFhUXFRUYHSggGBolGxUVITEhJSkrLi4uFyAzODMsNygtLisBCgoKDg0OGhAQGi0lICUtLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALgBEgMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAACAAEDBQYEBwj/xABGEAACAQIEAgcECAQDBQkAAAABAgADEQQSITEFQQYTIlFhgZEycaHwBxQjQlKxwdEzcoKSU2LhFYOixPEWJENUZKOys8L/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIEAwX/xAAoEQACAgICAgEDBAMAAAAAAAAAAQIRAyESMQRBEyJRYTIzccEUofD/2gAMAwEAAhEDEQA/AMWBrC5wVHOGRPHPWQ+WEgjXhAxFByKSmBEgZGWInRRa4gIt95IlO0UmhxTCKxAR2BtGQG0gsFoGWSPIyZaJY0iq1AN5IzSorXrHs3svdznXHj5P8HHJPitdgYviVgcvrOTC45ybZvWd9Hg7EbW15zvocFUa6XmrljiqM/x5ZOynw/EGv2tR6eksUxKtsde7nOh+D91j5WnFieFMvaGnj3RNY59aKrJDvZ03jznwtYNfXadAEzyVOmdotNWhwJINoCiSKshlIa0FjJcsiYQTG0OhhiAISmDBEwEFhFeMWkFDWjFY4MKMQEAGKoI6CMQJj5dI4MciFgRWih5YoWFDAx80GOJZIYktNJCJNSeRIqIZEDLDaOsmy6FTWPnhMdJGgkjJbxi0BjCI0iKI2N4JEIx5ZBwcSU5Da99Pzlj0Zw9qN7WN9ZXcYeyjxIEv+GJko3J31JOk1w/bM7/dJnowOog0sfRJt1qX94lrTwwtuD4zi7RqjT6ZWilaR4ijmVh4Q+JYylSNmY37gCT8Jz4HiKO4ADC/4gRf3XlRT7oico9WZVaTLV2sL2+EsgIHH1NOsF/zXHiGtJAJ0z+mZsSq0OonTTXSR4cayao1tplk/RpivYLm8hIh5oJEEJgmJDCMVpQhyY8GEJIwSscxjHgAJMRMe0ErGAVoxEcR5IA5YorGKAEIMNTAhLOrOZKg1kgEhQydDIZ0Q8TRwI7CSUADDEG0NomCBUawyLyMCSrEykAFjWk1oKrCwo4OJ0iU0F7EEnuHfLrCkVMOhYbAaHbc6nv2+MHCUxZiVDEAZQeZNxr5XnVh8IBSCWBFhoRcbabzTjn9FHGWP6rKlmosd1uDbYEXte3prLXAVzYr+ESAYYhzVvZyMpb7xXTQtvbQek6KGHAHid4p1WjrjUr2V7PmzOQSBc6AmwXcm2thD4XjEfKwvlJIGlw2W2axFwNxvJ6mGAOhIB/OS4XD5BYHTTT3RpxSE1Jv8FPx/AvVxCqo9kG57gp39LesjamPgN99RfWXnEkIs4Njz8QLMR5lVlbxBr1CbWvlNtvuiGWTdI5wglbIKC84bgRs9tIzGZ/Z09EJj2hkRXlE0CRGKwrxowGhRhGJgAVoMHPEpvCgskiYRwIiJNjAVYYEQgloB0PFAzRR0IiAhRMYarpLsmhgJIBGyxxEMkBhAyPNEJNFWHaIwljuO+SUCpkqrzjLSG8cPeJlL8iYxZgIL7xVEuOW8KFZ04EAvlJ9oWB7m3UjxuJYUmGUqTqvxtKkLpIcBiDnqKdSHB96sB/rO2HdojI+NMtHct7O3O0mGOAJAptYcyN/GcVirfeKnS65ezfmbkae6WWH4BVcZls98pv1iD2ttJfHQ/kRyddnHsFWBGtxa37yWjVubGNjuFNQBZiBv2VdWbnsuncZz4VzkJbflfcDxtHwsl5FQeNxlHrlFQqFGqFtsy93e3cPCVlR8zFjzJPrKvpG2erSQbghvcBfed4hmjVHPFK7DYwTBIiBnCjrY7RgIUYwAYxxHtEsBDFZG4nRAZYJg0czCPTk2WNKsVBiNEI6rJKsRkRkhgGJAwYorRoyQnSMpkjCMBKsKGDQjBtFaADiJYhvHSAE1JpJa4kRkiCc2dEG0C14V5G5iKDqrpApvyIgmtGNSOmTaOkCciYM9cXU7oQR3lSCvwvJ6dTlOvBjteRlY5OMgnFSiFwzFbA7zqrYm17ID5kflKXidQ0i1RRy18pUL0kbnv8AN5scXLcTNHLwdSNhQrg37Kj3XP5ysxlQs2Uczt7pU4bjzOco3O0s+H0yWud/n4SkuK2KU/keiLGYVVqXAF8qgnmfkmICd/EadmB8LThqJzmPI3y2aIxSQJEGPeNaSDHEEx1jlYABCUxExxGIcNERHMFmklDFYgI0eMQxEYmEBI3MBMQvETGDQTGIeKDeKOhWSqY4MSiMxiKHvHkJjgyqFZKFhqJCjyQNJdjRIIQaCIkEkoMDWDW2kgMN8AxF9vCCVsb6OFEZiFRWYnZVBYn3AS74V0TxdY60zSXm1UFNuQU9onyln0WIGGo1goWpTxApsyjKz5qv1c5iNxlrjTa6gzeIe+ehDxl7Z58/JfpHl3SHhAo4au6OxelUWmW0FlzUwzBeRIqKRfYMIuD4UKulzpuSWJv3kzacawKszo38PEoUa3JwhBI72KAH/cDvmH4TWZC2Hq6VKRyN429lh3qwsQfGGbGopOKK8fI5NqT2TY3DXlTieAUTrlt7poKsjy3mX5Guja8cZdoqMBwummqjW253lphKFoS0vCTKbC8Obb2HBRWgcbTFpXdHuFLUpYyqcxAbLR1P8RENwL8md6S+cbiuOYABFLVKhyUkG5ZtABNr0d4UKSUsP7QpAPUbk9QsWB13BqZmHMCknfNOCHK2+jH5M+NJdlPxnoRUQZsOesHNGIDj3HQOPQ+BmWxODq0/4lN0vtnVlv7rjWez1mvpM7xqh12Io0XXNTFOtUIO2cvSpIfeA1Qyp+NF7jo5w8mS/UeZgyYHSQYdTUzOi9hncp4JmOQXO9hbWEikGzaEd8xThTo2xlaTCqGMpiMSGIYTtpIwbyS8YmIBoQMYxogHvGYRXiEBkcFjDeQsZSJYtIoEUqiTpaOBGiLSSgTGBhgwWEYh1EkUSFTJkgxokWdNHDXGY6CRYdMzAd/5S5rIMtr6W5RxjewbOCmliNPdOjOYFEHQ9+//AFnUFEmWjrDaOnoob4SsPwYwH+2rhKn7z0Qr8+k876KD7LFD/wBV+a4b9Z6MZ6sP0o8bIvqZy8QwXWoVuQdCrC11ZTdWF+YIB8phek3Bqla1amoXFUBldBoKqakKt9wbEofep1XT0UH585wcV4d1oDIwSqoOR7Zhra6uv3kNhcaHQEEEAimk1TJTado8ywGPFQabjRgdCpG4I5GdvXAbzs4vwcV3JA+rY1Rc3uyVlXS5IH2tPbtgZ0uMw2lKmKs/UVkNKsNcrahh+Km2zqe8TzsuBx2uj1MHkKen2dPXki2858RjgiEuQANyY9fFqhVArPUbRKaDM7HwA5d5OkseHcCs6VsWBUrEk0MOlnVSO4HSq40ux7CbknSyxYXPfoefPGGl2RdG+HEMMXWQ9Y/YwtE6MAwOp/C7Lc3+4gJO89C4fhDTSxILt2nYCwLEW0HIAAADkFAkPDOGZWNarZqpBUWJK01JuUQnU3IBZzqxA2AVR0vj6WbL1qZr2tmW99dN956KqKo8ttydslyazPcYxOWvXPKlhUe/ixxTn/6Vmi5e6ZLpSdccOf1NT5GnjgPiDKJMpwBcuHpDuRfyvCx+FDm+x7+/3yXhtL7JP5R+U6fq88hv6me3FLikUNTCso2uPCQGahMNKPjGF6p7cjqP1EK9kS0cQMeR5oaxUKxzIzpJDGNogGvHEG1og0BicSBpMxkLSkSxoo0UYieImEIzCIYwiMQmg6N8BNb7Rx2AbAfjP7ROVAV3D+EVauqiy950EuKXR1VtnYnfbQTTDIostrDu/SclRwb63nGWVgkVP+xVXVTY+/8Ae8athHHO48dPiP2lqRIcVTzKVuRcbjlJWaSK4lDVQjQrbXQ+Hv5xNiwImrVqThWOYcg1irjuPce4+Oo2Mix3DOspnE0L5Vv1lLcoRuRzK7+M0QamNycFZcdC0LUah/xMYpHiqthc3wSp6T0YTD9B6NqNAHcIazeD1QxAPlWqD+ibhT8+s9WOlR5MnbbEPn4RKfn0jN8/CRo/6fpBypgo2gMbgadZcrrcaEEEqytoAyONVYX3BvMzx3hHYy4mn9YoA3FQLarSNvbdUsfe9Kx70OpmtU/PpCv8+X+kFIVGH4Bwmw/7rTChgOsxVUMxqW3yBjnqjTnlp63GbaazA8OSlci7ORZ6j2Lva9rkWAA5KAFHICdhPz6xm+fjGhFJ0oSpkUo+VQSrgc8xspPeL6W/zSg6isFBJBAIQ39hieWUHTQa6W1HjNvWphgVYAgggg7EG9wZm6/B8QrslMk0WZCCzKSmU6kg2Ym1++9l7pg8rw3mk5fh6/Pqv7Nfj51BcX9yfou1fO6P2kCjZiQhv2VXNqbi/utFx/Dg1WXnWw7p/YzL/wA1LrhuCWiuVbm5uWO7HQXNvC04uOAhqNQC9nZD4K1MuPV6VMec1ePCUMajJ2zPkkpTbS0ed8Ar3oUz3oh9VEtA4lRg6WTPS26qpUp+SVGVfVQD5ztpNMWSDUmepimnFFjhzrOXpRhs1LON018tj+/lJKTTrxPapsvepHwjh9hTXswAkgaCwgyOxdErGDAEI6RUFj3kTQmMjMaQmxyYN4ooAK0UeKAE6RNGivJKBe+nidfcN56dTq0vqtNUI1UX5a2tY+ZmS4F0eNY4liwUUKbHa9+rIzKO4secHB1SEqa2yhSPD7RQdPORkVqzny3RZ/Wzm2NxoRubc9PT4d0sAotoPScnBai1DbML89Zr34EwG2wv7/dMknR0TRmxAdbg628ZaNgSDt5TobhBylgDbvtoZHIvRl3IcZdCPEXzeXISwwXDuoZaiXAayuCb3DGwv3kG2vh3zhxlRabELYHw1PlyE68BxOvVy0VpBwzC+l2yjVvDYE+U7QUr0Q5L2W2Cwops7DZrWH4QL9n1LH+qXWGe/wA+795meI8ep0WK1AUAfJmNrElWbyHYYa22mcxXT+q4ZcFQarkBzOFYovpqx20FvAmexgm5RTZgyxSej0yvWVACxA7vG1thzmc4p02wVC+aqpI5A3P9q3Yekh48rYrhdTMhWoaJYo26tkzhT/WoHlPP+jtf7JBhuHdbVAytVORVLX3WowOtrXAInY5npHRfpZRxpcUgRkIGul7gkEeGjd220h6QdL1w9YUgqMc1NGu9mzVTYBVAN7A5je3LvlD0X4VisLXr43ErTRKgzMlPOTmBNrAjuLCwuSWlViaS4niASpVVFpP9YxRZwFGINstNBe11REQkblW8IJBZvulnSL6ooIClirucwYgImh9nmWZVH8058d0xSjhaGJrAAVgpsoJsXDNpzsADrrMn0xrHG16dGmSWrkLTszALhla5qMoNjnZSRe4sgIteQdP8ORWwWBoKH6oAhGNs2QDKCTsLCqJSJNvwrptgq/sVlueR35/dNm5900NKorC6sCPDz37p4nx2vTKVDiuHNSqFWy1EysmexyFqqW+9bQ5pteg5OF4d1lUlSFLHNe6i7uBY/hpkaRiN4o+fScvG6V6Dm1ygFQAbk0WFQDzyW85iej30i3t9ZpGmrk5H7RQ2NjZrcjccxpuJv8PikqC6kMpF+/QxgeY8VoBMViNdD1VQedMIT5tSaVwxovvH+keq1JaRX2nRsOzc70HAv77vU9Zj8AKim+YsPGZs0ezZgl0ehUawtJ3xFlJ8DKDAVzYXnXjqtqZ720H6zItGx7RSWgES2wvC85sxsdNBuAeZ7v8ApLijwaiu65vfecHlURUY+CTNnW4RhyD2QPFdDKbiXR5kXrKRzp8RHHNFkuLKYwY946idbEAFhBYYEaKwoDLFHzRRgSx6Q7Qvtcel4rRWiGevdEaVJcBiXI7RqVesPMjPoPdaeftj1qYmpSA9qhUZR3kAOB/w3Gm0tOinS1MOcSlU/Z1FYqOWapYrfuGpBPiJh8Xi8mK+sUzcUSGttmpkhMo8jbzjceSX8f7szbjJmj6JKvW0818tRgCB7Spfta30uLie0cXxdEYVijhQAVQqea9kWtuNJ869c1GtT6o/w3axFzdHF6Z8eybzQdXUdbdcw77czrr8YvkWNNP2N43Lr0XFfi4NYAVXAvrdjqBvznqdDE4aphj2kakUvvcWOh88wPjPBH4LUzfxdPjf9p3CnUWhUQOWK5HXlaxytb+4HynPHkjD9I5YpS7D4ziVo1rEA5iQuo01AFzsL3m06HV0GIpqbZg7KGU3B7JBHiuuhnjmNw9ZiC7ZrG5BJ18JuOHcZejiKOUXOUOxABKgsx259kqvmJWlKLT/AJGoy4NNHX9I+EOWqKSreqLMLfxDTWopseTAFWH8lpmeAtja1JEphcHRVRmq27bWHaamumUHe+m/tTfdJsMrUsp/xLjv/wA3rcjzmS4T0NrYmq31mvUNHNfqgzAEgAa+FxoBytqDeaPFncaOeaGzt+jjiBzYnCGp1wRi6VASwdS2Um/iQp3PttvLn6O+C18ItZKigUzUY0je5yWtc8hcKptf7xvaaPh3B6WHASlTVFGvZFvM+PidZZFdLHXvv7pqvZwoyv0hsBSpg1zQvUB6wAEKy3ZSwOlrjfkbHlMzgUxdcrRXElOrzNXxDhAzVGuVoqP8qlQ1vve4y26Q0Vp16mIWg5oov2j3DLctYmmrX2TPcAdoNvcTp6L8N6us9WphEp9bZkdCGCBgSaZsq87nNbXnrrLJOzo50U+r1nxFSs9eqyhc77gAEWHoIGI6JK+MGMLsXAK20ygMTra172dhvzmot8+sD5/+MYjH/SVgK1bD9XRQMWK5jcDsghtz3EJp75U9KsVRp0aWCcuq1bLdCoyBSgDNm0y6JfwzT0f5/KVnFuB0MSuWqgbuJGoOouDuDbmCDGB579thaYp10XEYUWGZQAVH3cyn4H/ivpNb0K4cMPRdlqF1dcykgrp2iOyduWnfeUWK6F1kZaKVScOzgsjG9gDfsnu8NO/W15ua6BUsNghHoDADzT6TkzUrj/w8QSf981Un4mn6zM8Jba+00fS+vnw+KBIFmpkX52GHqADx1cTJ8MqaCZ/I6Rq8btm3wWHUgDzE6sLwwuwbxyU769uxLMRzygaeMreEVjoLGWmPpVMi+0Mg60ZTbLdst/VvjMOWVRNjuyanRp0jkXVr9ot7THnJnWV3AcQKlVVZsxY2FxYn3EXHqRPQ+L8FSnTGhJIOW1twL5Sb6Ei/pMMsc3bS6D5IqkzDYui1rKO4nl4+u06uE11TSoNG38Btr6zUdH+HUcTTZlIbL2L/AHcwF7A89CNdvfPOeL1z1z0iAmViup5g2NofDKlJrQvljdI4ek/DlpVexfKxJB0ynwUju5+8SnM9I45wRTwtaq6lWuSCTYMvdy1C+o7p5tmm2CaSshTUg72gu0C8FjKodjxRrRRiOi8cwisG0RZz4xdL2vYFWHep/UHXyEqsMz5s6gGwKOp1DIwsQfePiLy+InLSp5GJGx5RqfFMl41JiwSfZoT7SAUz7hqh9Lr/AEiW9DFkc5wKQDfkRY+4/PwgMxH7zNP63ZpilFUWpxnMmdCA7lrZgQRz7Q7Pne0p8PV3OhNtB4y1wvWJTU1QEYm+QHM2uuaoRot+46+E4Ti4nRJP0BSwJDqXUsvZLWutwTotyNCf9ZpDSSn2lUB6ll78o0sBfkLD0lJgcYa7dWhLZCRlAOhXQ6W+Mters5sQz+zTUmwXkWbxPwHjtzqcpJS0KTila2d3Fa+Zb8hoPEk3Y/pLzgdP2R5yor8Lc072JA7lYXP9YUehnPT47iaXaFKmBqvaJzDLvdQdP9J6cMuOGrPPlGUj0BUvf574Lj59JisJ03qsyoKatdgCbMpHoT4zQcI4yK4uFNiSAdwbA38R5ia4Z4SZnlikjuxlNSjK9gpBU3sBrcc/fBXEU9g6f3D9/Gec/SD0wekwo07CqVDXIDLRRxdcoYWaoRqSRZQdNdsN/wBrsd/5j/2sP+tOaTgfQIrr+JfUeESn59J4FT6aY0bvTb+ahQ//ACgnoP0f9K/rAyMAHFhURdrtoKlMfhJFivI+BEYG+Ufl8/lAOl5Ku/z4yOsICI6x2M5HfMCveCPUTqOqzhJs0BnmnTLi9OgK1AqHavSAt+Copyhj4WNxb/DG4bTLcDacHHqrVK9WqfvVGA9yHIPgBLHobiVSuma1rkXOwLAgE+FyNeU4Z9o04NM33BuD13FwEUf5m19BOjpTSLYesbBqmHoo6rr911FU9zCxvacnB8Q+FqFGuaZO/wCEna/ge+d/SIkEYinzHVtzAB5ldiCDbX9Z5GScu/R6CjydGE4NiXpujOx7PVFAPaZR2gQPujtak9x32m/4t0oxNegoDAFWB0OptYqSSNTcHw20mQGGp1AWS61Bq2dhaoeZV+R20Ou+p0AjfFMqgG/M228B+R9YTyOT+kP8ev1GkwfSjFYMO9FVyVO01P2gr/ey9w7vCw5TFYzi1WtXz4impu2a6kqb3vrbQ3Pet52rjSdCdD8DyMg6gMTm0tf1nSORpVI5vx7dpmyp9IKX+zauHSpclsxDDKQNAF0uGuQTe4J00mIIj0kygjvN/wBoQE6pkKHHRHaCRrJ8kaqNPdHY6BAikgWKKwolDRiIooihoiLxRQAiNIjbX841LVgGUkX2FgfU7R4pDSLTZBVFTrRkGRAb6sDe3La58hPRuheApYyoaLBTkBI6wm+W97FEtmO3NR4W0jxRqMZzimv+sic5Rg2marj3RWjQpKyDTOocaIlnNrlUAB1O7XOu8zfAQ1Kq9N75ldhbkBfs27xa2sUUXm4oxbpfb+zhgySktmxOHPVNrtcjfuGo7jf8pieJL2XFtmuPMKT+kaKYH2jtD2Z3Cv8AaeIsffr+e81fQgPSZ6bDQ1CVPeGA292YDyiim3G6a/lHOS7KfpZ0KbEVuvNY0gUpplakTqiBfazgG9pf8E6OYfqkpOtI9XTppmNKjeowFmYhgTcnXfnFFPZRgKD6Q+A4ejg6zU6VEMBRYOtKkjC9empAZFB1DH1lD9Eo+3qnu6j41D+wiilCPaL6/Pj+8DECKKAjnU6SCvT5jlGijGeNdJuGhatanbarUYe52Lj4NMzgUIqon4mVf7mA/WKKZo7bTNb0k0e58U4aaj1MiD7MAnYBkYC++l8xItztKLD3prYAtTa91a9vEITt/KdYop52dJSdHbBJtJMrTwcl2OHqWDKxZGvdVt6nW2k5azYhR1QpAWyqWNyG07VwQUIBvraPFM3dtnorLKlF7AwfC8zkVEcjXWn2deXtDLb5tO7EdHz1d1JzAbEjtW5bb2iijV3ZwnP7GeIj2iims4hSOpFFBAxooooCP//Z";
   klimages[3] = "http://cbssports.com/images/visual/whatshot/USATSI_9100458.jpg";
function startklInterval()
{
	timerkl = setInterval("changeImagekl()", Math.floor((Math.random() * 5) + 1) * 1000);
	btn4.innerHTML = "Stop";
}
function stopklInterval()
{
	clearInterval(timerkl);
	btn4.innerHTML = "Start";
}
var timerkl = setInterval("changeImagekl()", Math.floor((Math.random() * 5) + 1) * 1000);

//count number to determined which pic to show
var x = 0;
function changeImagetd()
{
document.getElementById("timmy").src=tdimages[x]
	x ++;
	x = x % 4;
}

var y = 0;
function changeImagemg()
{
document.getElementById("manu").src=mgimages[y]
	y ++;
	y = y % 4;	
}

var z = 0;
function changeImagetp()
{
document.getElementById("tony").src=tpimages[z]
	z ++;
	z = z % 4;	
}

var q = 0;
function changeImagekl()
{
document.getElementById("Kawhi").src=klimages[q]
	q ++;
	q = q % 4;	
}

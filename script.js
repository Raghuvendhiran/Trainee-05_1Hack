const body = document.body
const h1 = document.createElement('h1');
h1.classList.add("text-center", "text-white", "pt-3");
h1.innerHTML = "This is ANIME Series Database";
document.body.append(h1);

const box = document.createElement("div");
box.classList.add("pt-3", "container", "input-group", "flex-nowrap");

const span = document.createElement("span");
span.classList.add("input-group-text");
span.innerHTML = "Search Box";

const input = document.createElement("input");
input.id = "search";
input.classList.add("form-control");
input.setAttribute("type", "search");
input.setAttribute("placeholder", "Search for an anime series...");

const btn = document.createElement("button");
btn.id = 'click';
btn.classList.add("btn", "btn-info");
btn.setAttribute("type", "button");
btn.innerHTML = "Search";

box.append(span);
box.append(input);
box.append(btn);

document.body.append(box);

const con = document.createElement('div');
con.classList.add("container");
const row = document.createElement('div');
row.classList.add("row", "mt-2");
con.append(row);



const wapi = "https://api.jikan.moe/v3/search/anime?q=naruto";

(async function test() {
    try {
        const response = await fetch(wapi);
        if (response.status !== 200) throw new Error("something error occured");
        const data = await response.json();
        const data2 = data.results;
        console.log(data2);
        for (let i = 0; i < data2.length; i++) {
            row.innerHTML += `<div class="col-lg-6 col-md-6 col-sm-12 ">
            <div class="text-white mb-3" style="max-width: 25rem;">
            <div class="pt-5 card-header text-center h5" id="Name">${data2[i].title}</div>
            <div class="pt-2 ">
                <div class="card-body">
                    <img src="${data2[i].image_url}" class="card-img-top image" alt="Image">
                    <div class="text-center pt-4 ">
                        <p id="Capital">Start Date: ${data2[i].start_date}</p>
                        <p id="Region">End Date: ${data2[i].end_date}</p>
                        <p id="Country codes">Type: ${data2[i].type}</p>
                        <p id="Country codes">IMDB Rating: ${data2[i].score}</p>
                    </div>
                </div>
            </div>
        </div>`
            document.body.append(con);

        };

        async function anime() {
            try {

                const ani = await fetch(wapi);
                if (response.status !== 0) throw new Error("something error occured2");
                const first = await response.json();
                const sec = first.results;
                console.log("response", sec);

            }
            catch (err) {
                console.log(err.message2)
            }

        }


        btn.addEventListener("click", () => {
            let value = document.getElementById("search").value;
            console.log("SearchValue", value);
            anime(value)
        })

        // document.getElementById("click").addEventListener("click",function(a){
        //     a.stopPropagation();
        //     var b1 = document.getElementById("search").value;
        //     for (let i = 0; i < data2.length; i++) {
        //         if (data2[i].title == b1) {
        //             row.innerHTML =
        //                 `<div class="col-lg-6 col-md-6 col-sm-12 ">
        //         <div class="text-white mb-3" style="max-width: 25rem;">
        //         <div class="pt-5 card-header text-center h5" id="Name">${data2[i].title}</div>
        //         <div class="pt-2 ">
        //             <div class="card-body">
        //                 <img src="${data2[i].image_url}" class="card-img-top image" alt="Image">
        //                 <div class="text-center pt-4 ">
        //                     <p id="Capital">Start Date: ${data2[i].start_date}</p>
        //                     <p id="Region">End Date: ${data2[i].end_date}</p>
        //                     <p id="Country codes">Type: ${data2[i].type}</p>
        //                     <p id="Country codes">IMDB Rating: ${data2[i].score}</p>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>`
        //         return
        //         }
        //         else {
        //             console.log("Not found");
        //             break
        //         }
        //     }
        // })


    } catch (err) {
        console.log(err.message)
    }
})();

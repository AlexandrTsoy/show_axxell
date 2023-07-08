let currentSlide = 1;
let totalSlides = 3;

function changeSlide(n) {
  currentSlide += n;
    if (currentSlide > totalSlides) {
  currentSlide = 1;
    } else if (currentSlide < 1) {
  currentSlide = totalSlides;
}

document.getElementById('currentSlide').textContent = currentSlide;
document.getElementById('slideshow').getElementsByTagName('img')[0].src = `photo${currentSlide}.jpg`;

let titles = [
  "Hästar",
  "Hund",
  "Varg"
];
      
let captions = [
  "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
  "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
];
      
document.getElementById('title').textContent = titles[currentSlide - 1];
document.getElementById('caption').textContent = captions[currentSlide - 1];

} 
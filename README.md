# Training Center Nepal Website

A static website for Training Center Nepal, a skill development and educational institution. This website showcases courses, projects, and the mission of the organization.

## Project Structure
```
training-center-nepal/
├── index.html              # Main HTML file
├── css/
│   ├── variables.css       # CSS variables and design tokens
│   └── style.css           # Main stylesheet
├── js/
│   └── main.js             # JavaScript functionality
├── assets/
│   └── images/             # Image assets (to be added)
│       ├── hero1.jpg
│       ├── hero2.jpg
│       ├── hero3.jpg
│       ├── hero4.jpg
│       ├── hero5.jpg
│       ├── hero6.jpg
│       ├── hero7.jpg
│       ├── barista.jpg
│       ├── bartending.jpg
│       ├── python.jpg
│       ├── barber.jpg
│       ├── home-cooking.jpg
│       ├── graphic-design.jpg
│       ├── EHRP.jpg
│       ├── SAMRIDDHI.jpg
│       ├── eventii.jpg
│       ├── MoPR.jpg
│       ├── SEP.jpg
│       ├── GIZ.jpeg
│       ├── director.jpg
│       └── mission-bg.jpg
└── README.md               # Project documentation
```

## Features

- **Responsive Design**: Mobile-first approach that works on all devices
- **Image Carousel**: Auto-rotating hero section with manual controls
- **Dynamic Content**: Courses and projects loaded from JavaScript data
- **Nepali Theme**: Uses Nepal flag colors (blue, red, kesari)
- **Bilingual Support**: English with Nepali translations
- **Modern UI**: Clean, professional design with smooth animations

## Setup Instructions

1. **Clone or download** this repository
2. **Add images** to the `assets/images/` folder:
   - 7 hero images (hero1.jpg through hero7.jpg)
   - Course images (barista.jpg, bartending.jpg, etc.)
   - Project images (digital-literacy.jpg, women-empowerment.jpg, etc.)
   - director.img and mission-bg.jpg
3. **Open index.html** in your web browser

## Image Requirements

| Image | Dimensions | Description |
|-------|------------|-------------|
| Hero images | 1200x600px | Background carousel images |
| Course images | 400x250px | Course card thumbnails |
| Project images | 400x300px | Project card images |
| Director image | 400x300px | Director's photo |
| Mission background | 1200x500px | Mission section background |

## Customization

### Colors
Edit `css/variables.css` to change the color scheme:
```css
--nepal-blue: #003893;    /* Nepal flag blue */
--nepal-red: #DC143C;      /* Nepal flag red */
--kesari: #FF9933;         /* Kesari (saffron) color */
```

### Content
Edit the data arrays in `js/main.js` to update:
- `coursesData` - Course listings
- `projectsData` - Project information
- `heroImages` - Carousel images

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Credits

- Icons: [Font Awesome](https://fontawesome.com)
- Fonts: [Google Fonts - Noto Sans Devanagari](https://fonts.google.com/noto)
- Design: Inspired by modern educational websites

## License

This project is open source and available for personal and commercial use.
# Al-Huda Academy - Professional Project Structure

## \`\`\`
src/
├── assets/                          # Static assets
├── common/
│   ├── Navbar.jsx                  # Professional navigation with mobile support
│   └── ...
│
├── component/
│   ├── Home/
│   │   ├── HeroSection.jsx        # Hero with features grid
│   │   ├── FeaturesSection.jsx    # Services showcase
│   │   └── TestimonialsSection.jsx # Student testimonials
│   │
│   ├── About/
│   │   └── AboutContent.jsx
│   │
│   ├── Courses/
│   │   ├── CourseList.jsx
│   │   └── DemoSection.jsx
│   │
│   ├── HowItWorks/
│   │   └── StepsSection.jsx
│   │
│   ├── Contact/
│   │   ├── WhatsAppContact.jsx
│   │   └── ContactForm.jsx
│   │
│   ├── FAQs/
│   │   └── FAQList.jsx
│   │
│   ├── Testimonials/
│   │   └── TestimonialList.jsx
│   │
│   └── Shared/                     # Reusable components
│       ├── Button.jsx             # Professional button component
│       ├── Card.jsx               # Reusable card component
│       ├── Container.jsx          # Layout container
│       ├── Heading.jsx            # Typography heading component
│       ├── Text.jsx               # Typography text component
│       └── CallToAction.jsx       # CTA component
│
├── page/                           # Page components
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Courses.jsx
│   ├── HowItWorks.jsx
│   ├── Contact.jsx
│   ├── FAQs.jsx
│   └── Testimonials.jsx
│
├── constants/                      # Configuration constants
│   ├── colors.js                  # Professional color palette
│   ├── typography.js              # Typography system
│   └── appConfig.js              # App-wide configuration
│
├── styles/                         # Global styles
│   └── commonClasses.js           # Tailwind utility classes
│
├── utils/                          # Utility functions
│   └── helpers.js                 # Helper functions
│
├── hooks/                          # Custom React hooks (future)
│   └── (empty)
│
├── config/                         # Configuration files (future)
│   └── (empty)
│
├── layouts/                        # Layout components (future)
│   └── (empty)
│
├── App.jsx                         # Main app component
├── App.css
├── main.jsx
├── index.css
└── ...
\`\`\`

## Color Palette

### Primary Colors
- **Gold**: #D4AF37 (Brand primary)
- **Gold Bright**: #F4C430 (Highlights, CTAs)
- **Gold Dark**: #8C6B1F (Shadows, depth)
- **Gold Light**: #F8E7A1 (Subtle highlights)

### Background Colors
- **Dark**: #0D0D0D (Main background)
- **Darker**: #000000 (Deep background)
- **Card**: #1A1A1A (Card backgrounds)
- **Hover**: #252525 (Hover states)

### Text Colors
- **Primary**: #FFFFFF (Main text)
- **Secondary**: #E6E6E6 (Body text)
- **Muted**: #A9A9A9 (Disabled/hint text)
- **Light**: #F0F0F0 (Light text)

### Accent Colors
- **Emerald**: #1E5631 (Islamic accent)
- **Success**: #10B981 (Positive actions)
- **Warning**: #F59E0B (Warnings)
- **Error**: #EF4444 (Errors)
- **Info**: #3B82F6 (Information)

## Key Features

1. **Professional Reusable Components**
   - Button component with variants (primary, secondary, outline, ghost)
   - Card component with hover effects
   - Typography components (Heading, Text)
   - Container component for layout consistency
   - CallToAction component for CTAs

2. **Centralized Configuration**
   - Colors stored in constants
   - Typography system defined
   - Navigation links configurable
   - App metadata managed centrally

3. **Professional Styling**
   - Consistent spacing and padding
   - Professional typography hierarchy
   - Smooth transitions and hover effects
   - Accessibility-conscious color contrasts
   - Responsive design patterns

4. **Enhanced Navigation**
   - Sticky navbar with gradient background
   - Mobile-responsive navigation
   - Smooth hover effects
   - Logo with tagline

5. **Professional Footer**
   - Multi-column layout
   - Quick links section
   - Contact information
   - Social media links
   - Copyright information

6. **Improved WhatsApp Button**
   - Now shows text on desktop
   - Smooth scale animation
   - Better positioned
   - More eye-catching design

## Usage Examples

### Using the Button Component
\`\`\`jsx
import Button from '../component/Shared/Button';
import { MessageCircle } from 'lucide-react';

<Button
  href="/courses"
  variant="primary"
  size="large"
  icon={MessageCircle}
>
  Explore Courses
</Button>
\`\`\`

### Using Typography Components
\`\`\`jsx
import Heading from '../component/Shared/Heading';
import Text from '../component/Shared/Text';

<Heading level="h2" color="gold" className="mb-4">
  My Section
</Heading>
<Text color="secondary" size="lg">
  Body text content here
</Text>
\`\`\`

### Using Container Component
\`\`\`jsx
import Container from '../component/Shared/Container';

<Container size="lg" className="py-16">
  {/* Your content */}
</Container>
\`\`\`

## Benefits of This Structure

✅ **Scalability**: Easy to add new components and features
✅ **Maintainability**: Clear folder organization
✅ **Reusability**: Shared components across pages
✅ **Consistency**: Centralized styling and configuration
✅ **Professional Appearance**: Modern, polished UI/UX
✅ **Accessibility**: Proper contrast ratios and semantic HTML
✅ **Performance**: Optimized component structure
✅ **Developer Experience**: Clear naming and organization
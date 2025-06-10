// عدادات الإحصائيات
document.addEventListener('DOMContentLoaded', function() {
    // عدادات الإحصائيات
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200;
    
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-count');
        const count = +counter.innerText;
        const increment = target / speed;
        
        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCounter, 1);
        } else {
            counter.innerText = target;
        }
        
        function updateCounter() {
            const count = +counter.innerText;
            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCounter, 1);
            } else {
                counter.innerText = target;
            }
        }
    });
    
    // تنعيم التمرير
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // إظهار/إخفاء شريط التنقل عند التمرير
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
        const currentScrollPos = window.pageYOffset;
        const navbar = document.querySelector('.navbar');
        
        if (prevScrollpos > currentScrollPos) {
            navbar.style.top = "0";
        } else {
            navbar.style.top = "-80px";
        }
        prevScrollpos = currentScrollPos;
    };
    
    // إضافة فئة نشطة للعناصر عند التمرير
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
});
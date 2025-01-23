
        // ڕووناکی و تاریک چالاک کە
        function toggleTheme() {
            const root = document.documentElement;
            const themeIcon = document.getElementById('theme-icon');
            
            if (root.getAttribute('data-theme') === 'light') {
                root.setAttribute('data-theme', 'dark');
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
            } else {
                root.setAttribute('data-theme', 'light');
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            }
        }
        
                // دیاریکردنی فۆرماتی زمارەکان بۆ شێوازی کوردی و زمارەکانی عەرەبی
                function formatNumber(num) {
                    return new Intl.NumberFormat('english', { 
                        minimumFractionDigits: 2, 
                        maximumFractionDigits: 2,
                        useGrouping: true
                    }).format(num);
                }
        
                // پیشاندانی ئاگادارکردنەوەکان
                function showAlert(message) {
                    const alertEl = document.getElementById('alert');
                    alertEl.textContent = message;
                    alertEl.style.display = 'block';
                    setTimeout(() => {
                        alertEl.style.display = 'none';
                    }, 4000);
                }
        
                // ڤالیدەیشنی زمارەکان
                document.querySelectorAll('input[pattern]').forEach(input => {
                    input.addEventListener('input', function(e) {
                        let value = e.target.value;
                        // لابردنی هەر نووسراوێکی جگە لە ژمارە و خاڵ
                        e.target.value = value.replace(/[^0-9.]/g, '');
                        
                        // دڵنیابوون لەوەی تەنها یەک خاڵ هەیە
                        let dotCount = (value.match(/\./g) || []).length;
                        if (dotCount > 1) {
                            e.target.value = value.replace(/\.+$/, '');
                        }
                    });
                });
        
                // ژمێرکردنی مووچە
                
        
                    // ژمێرکردنی مووچە
        function calculate() {
            // وەرگرتنی نرخەکان
            const salary1 = parseFloat(document.getElementById('salary1').value) || 0;
            const salary2 = parseFloat(document.getElementById('salary2').value) || 0;
            const salary3 = parseFloat(document.getElementById('salary3').value) || 0;
            const serviceYears = parseFloat(document.getElementById('service-years').value) || 0;
            const degreeMultiplier = parseFloat(document.getElementById('degree').value) || 0;
        
            // ڤالیدەیشن بۆ بەتاڵ بوونی خانەکان
            if (salary1 === 0 || salary2 === 0 || salary3 === 0 || serviceYears === 0) {
                showAlert('تکایە هەموو زانیاریەکان پڕ بکەوە');
                return;
            }
        
            // ڤالیدەیشن بۆ ساڵانی خزمەت
            if (serviceYears < 15) {
                showAlert('دەبێت زیاد لە ١٥ سال خزمەتی هەبێت و تەمەنی سەروو ٤٥ ساڵ بێت');
                return;
            }
        
            // ژمێرکردنی تێکڕای مووچە
            const averageSalary = (salary1 * 12 + salary2 * 12 + salary3 * 12) / 36;
            
            // ژمێرکردنی بڕی مووچەکان
            const result1 = (averageSalary * serviceYears * 2.5) / 100;
            const result2 = (result1 * serviceYears) / 100;
            const result3 = result1 * degreeMultiplier;
            const finalResult = result1 + result2 + result3;
        
            // نیشاندانی ئەنجامەکان بە فۆرماتی جوان
            document.getElementById('result1').textContent = formatNumber(result1);
            document.getElementById('result2').textContent = formatNumber(result2);
            document.getElementById('result3').textContent = formatNumber(result3);
            document.getElementById('final-result').textContent = formatNumber(finalResult);
        }
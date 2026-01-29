const translations = {
    ar: {
        title: "نظام حساب المعدل الفصلي",
        subtitle: "نظام إلكتروني لحساب المعدل الفصلي للطلاب",
        themeToggle: "🌙 الوضع الليلي",
        themeToggleLight: "☀️ الوضع النهاري",
        calculate: "حساب المعدل",
        reset: "إعادة تعيين",
        exportPDF: "📄 تصدير إلى PDF",
        resultsTitle: "النتائج",
        subjectResults: "نتائج المواد",
        footer: "© 2026 نظام إدارة الطلاب - جميع الحقوق محفوظة",
        coreSubjects: "📚 المواد الأساسية (40% مراقبة + 60% امتحان)",
        examOnlySubjects: "📝 مواد الامتحان فقط (100% امتحان)",
        practicalSubjects: "🔬 المواد العملية (100% أعمال موجهة)",
        subjectName: "اسم المادة",
        coefficient: "المعامل",
        continuous: "المراقبة المستمرة",
        exam: "الامتحان",
        practical: "الأعمال الموجهة",
        passed: "ناجح",
        failed: "راسب",
        successMsg: "مبروك! لقد نجحت بتفوق. استمر في العمل الجاد والتميز الأكاديمي.",
        failMsg: "لا تيأس! الفشل فرصة للتعلم والنمو. راجع دروسك واستعد جيداً للمرة القادمة.",
        average: "المعدل العام",
        status: "الحالة",
        finalGrade: "النهائي",
        type: "النوع",
        core: "أساسي",
        examOnly: "امتحان",
        practicalOnly: "عملي",
        pdfTitle: "تقرير نتائج الفصل الدراسي",
        pdfGenerated: "تاريخ التوليد",
        semesterAverage: "المعدل الفصلي",
        grades: "الدرجات"
    },
    fr: {
        title: "Système de Calcul de Moyenne Semestrielle",
        subtitle: "Système électronique pour le calcul de la moyenne semestrielle des étudiants",
        themeToggle: "🌙 Mode Nuit",
        themeToggleLight: "☀️ Mode Jour",
        calculate: "Calculer la Moyenne",
        reset: "Réinitialiser",
        exportPDF: "📄 Exporter en PDF",
        resultsTitle: "Résultats",
        subjectResults: "Résultats des Matières",
        footer: "© 2026 Système de Gestion des Étudiants - Tous droits réservés",
        coreSubjects: "📚 Matières Fondamentales (40% CC + 60% Examen)",
        examOnlySubjects: "📝 Matières à Examen Uniquement (100% Examen)",
        practicalSubjects: "🔬 Matières Pratiques (100% TP)",
        subjectName: "Nom de la Matière",
        coefficient: "Coefficient",
        continuous: "Contrôle Continu",
        exam: "Examen",
        practical: "Travaux Pratiques",
        passed: "Admis",
        failed: "Ajourné",
        successMsg: "Félicitations! Vous avez réussi avec succès. Continuez votre excellent travail académique.",
        failMsg: "Ne vous découragez pas! L'échec est une opportunité d'apprentissage. Révisez et préparez-vous mieux pour la prochaine fois.",
        average: "Moyenne Générale",
        status: "Statut",
        finalGrade: "Note Finale",
        type: "Type",
        core: "Fondamental",
        examOnly: "Examen",
        practicalOnly: "Pratique",
        pdfTitle: "Rapport des Résultats du Semestre",
        pdfGenerated: "Date de Génération",
        semesterAverage: "Moyenne Semestrielle",
        grades: "Notes"
    },
    en: {
        title: "Semester Average Calculation System",
        subtitle: "Electronic system for calculating student semester averages",
        themeToggle: "🌙 Night Mode",
        themeToggleLight: "☀️ Day Mode",
        calculate: "Calculate Average",
        reset: "Reset",
        exportPDF: "📄 Export to PDF",
        resultsTitle: "Results",
        subjectResults: "Subject Results",
        footer: "© 2026 Student Management System - All Rights Reserved",
        coreSubjects: "📚 Core Subjects (40% CA + 60% Exam)",
        examOnlySubjects: "📝 Exam-Only Subjects (100% Exam)",
        practicalSubjects: "🔬 Practical Subjects (100% Practical Work)",
        subjectName: "Subject Name",
        coefficient: "Coefficient",
        continuous: "Continuous Assessment",
        exam: "Exam",
        practical: "Practical Work",
        passed: "Passed",
        failed: "Failed",
        successMsg: "Congratulations! You have passed successfully. Keep up the excellent academic work.",
        failMsg: "Don't give up! Failure is an opportunity to learn and grow. Review your lessons and prepare better next time.",
        average: "Overall Average",
        status: "Status",
        finalGrade: "Final Grade",
        type: "Type",
        core: "Core",
        examOnly: "Exam",
        practicalOnly: "Practical",
        pdfTitle: "Semester Results Report",
        pdfGenerated: "Generation Date",
        semesterAverage: "Semester Average",
        grades: "Grades"
    }
};

const subjectConfig = {
    core: [
        { name: { ar: "الرياضيات 03", fr: "Mathématiques 03", en: "Mathematics 03" }, coefficient: 3 },
        { name: { ar: "الموجات و الاهتزازات", fr: "ondes et vibrations", en: "ondes & vibrations" }, coefficient: 2 },
        { name: { ar: "الكترونيك الاساسية 1", fr: "electronique fondamental 1", en: "electronic fondamental 1" }, coefficient: 2 },
        { name: { ar: "الالكتروتقني الاساسية 1", fr: "electrothechnique fondamental 1", en: "electrothechnic fondamental 1" }, coefficient: 2 },
        { name: { ar: "الاحصاء و الاحتمالات", fr: "proba et stat", en: "proba & stat" }, coefficient: 2 }
    ],
    examOnly: [
        { name: { ar: "احدث التقنيات في الهندسة الكهربائية", fr: "Etat de l'art du génie électrique", en: "State of the art in electrical engineering" }, coefficient: 1 },
        { name: { ar: "الطاقة و البيئة", fr: "Energies et environnement", en: "Energy and environment" }, coefficient: 1 },
        { name: { ar: "اللغة الانجليزية التقنية ", fr: "Anglais technique", en: " Technical english" }, coefficient: 1 }
    ],
    practical: [
        { name: { ar: "أشغال تطبيقية الموجات و الاهتزازات", fr: "TP ondes et vibrations", en: "ondes & vibrations Lab" }, coefficient: 1 },
        { name: { ar: "أشغال تطبيقية الكترونيك 1 و الالكتروتقني 1", fr: "TP electronique 1 et electrothechnique 1 ", en: "electronic 1 et electrothechnic 1 Lab" }, coefficient: 1 },
        { name: { ar: " إعلام آلي03 ", fr: "Informatique", en: "Computer Science" }, coefficient: 1 }
    ]
};

let currentLang = 'fr';
let currentTheme = 'light';
let subjectsData = {};

function init() {
    loadFromStorage();
    initializeSubjectsData();
    renderSubjects();
    updateAllTexts();

    if (currentTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
    }
}

function initializeSubjectsData() {
    let index = 0;

    ['core', 'examOnly', 'practical'].forEach(category => {
        subjectConfig[category].forEach((subject) => {
            if (!subjectsData[index]) {
                subjectsData[index] = {
                    name: subject.name,
                    coefficient: subject.coefficient,
                    type: category,
                    continuous: '',
                    exam: '',
                    practical: ''
                };
            }
            index++;
        });
    });
}

function renderSubjects() {
    const container = document.getElementById('subjectsContainer');
    container.innerHTML = '';

    const categories = [
        { key: 'core', icon: '📚' },
        { key: 'examOnly', icon: '📝' },
        { key: 'practical', icon: '🔬' }
    ];

    let globalIndex = 0;

    categories.forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'subject-category';

        const categoryHeader = document.createElement('div');
        categoryHeader.className = 'category-header';
        categoryHeader.innerHTML = `
            <span class="category-icon">${category.icon}</span>
            <h2 class="category-title" id="cat_${category.key}">${translations[currentLang][category.key + 'Subjects']}</h2>
        `;
        categoryDiv.appendChild(categoryHeader);

        subjectConfig[category.key].forEach((subject) => {
            const data = subjectsData[globalIndex];

            const subjectCard = document.createElement('div');
            subjectCard.className = 'subject-card';

            let gradesHTML = '';
            if (category.key === 'core') {
                gradesHTML = `
                    <div class="input-group">
                        <label id="lbl_cont_${globalIndex}">${translations[currentLang].continuous}</label>
                        <input type="number" min="0" max="20" step="0.25" 
                               placeholder="0.00" 
                               value="${data.continuous}"
                               onchange="updateSubject(${globalIndex}, 'continuous', this.value)">
                    </div>
                    <div class="input-group">
                        <label id="lbl_exam_${globalIndex}">${translations[currentLang].exam}</label>
                        <input type="number" min="0" max="20" step="0.25" 
                               placeholder="0.00"
                               value="${data.exam}"
                               onchange="updateSubject(${globalIndex}, 'exam', this.value)">
                    </div>
                `;
            } else if (category.key === 'examOnly') {
                gradesHTML = `
                    <div class="input-group">
                        <label id="lbl_exam_${globalIndex}">${translations[currentLang].exam}</label>
                        <input type="number" min="0" max="20" step="0.25" 
                               placeholder="0.00"
                               value="${data.exam}"
                               onchange="updateSubject(${globalIndex}, 'exam', this.value)">
                    </div>
                `;
            } else {
                gradesHTML = `
                    <div class="input-group">
                        <label id="lbl_prac_${globalIndex}">${translations[currentLang].practical}</label>
                        <input type="number" min="0" max="20" step="0.25" 
                               placeholder="0.00"
                               value="${data.practical}"
                               onchange="updateSubject(${globalIndex}, 'practical', this.value)">
                    </div>
                `;
            }

            subjectCard.innerHTML = `
                <div class="subject-header">
                    <div class="subject-info">
                        <span class="subject-info-label" id="lbl_name_${globalIndex}">${translations[currentLang].subjectName}</span>
                        <span class="subject-info-value">${subject.name[currentLang]}</span>
                    </div>
                    <div class="subject-info">
                        <span class="subject-info-label" id="lbl_coef_${globalIndex}">${translations[currentLang].coefficient}</span>
                        <span class="subject-info-value">${data.coefficient}</span>
                    </div>
                </div>
                <div class="grades-grid">
                    ${gradesHTML}
                </div>
            `;

            categoryDiv.appendChild(subjectCard);
            globalIndex++;
        });

        container.appendChild(categoryDiv);
    });
}

function updateSubject(index, field, value) {
    subjectsData[index][field] = value;
    saveToStorage();
}

function calculateAverage() {
    let totalWeighted = 0;
    let totalCoefficients = 0;
    const results = [];

    Object.keys(subjectsData).forEach((key) => {
        const subject = subjectsData[key];
        if (!subject || !subject.coefficient) return;

        let finalGrade = 0;
        const coef = parseFloat(subject.coefficient) || 0;

        if (subject.type === 'core') {
            const cont = parseFloat(subject.continuous) || 0;
            const exam = parseFloat(subject.exam) || 0;
            finalGrade = (cont * 0.4) + (exam * 0.6);
        } else if (subject.type === 'examOnly') {
            finalGrade = parseFloat(subject.exam) || 0;
        } else if (subject.type === 'practical') {
            finalGrade = parseFloat(subject.practical) || 0;
        }

        totalWeighted += finalGrade * coef;
        totalCoefficients += coef;

        results.push({
            name: subject.name,
            coefficient: coef,
            type: subject.type,
            continuous: subject.continuous,
            exam: subject.exam,
            practical: subject.practical,
            finalGrade: finalGrade.toFixed(2)
        });
    });

    const average = totalCoefficients > 0 ? (totalWeighted / totalCoefficients) : 0;
    displayResults(average, results);
}

function displayResults(average, results) {
    const resultCard = document.getElementById('resultCard');
    const averageDisplay = document.getElementById('averageDisplay');
    const statusBadge = document.getElementById('statusBadge');
    const motivationMessage = document.getElementById('motivationMessage');
    const resultsTable = document.getElementById('resultsTable');

    const passed = average >= 10;

    averageDisplay.textContent = average.toFixed(2);
    averageDisplay.className = `average-display ${passed ? 'success' : 'danger'}`;

    statusBadge.textContent = translations[currentLang][passed ? 'passed' : 'failed'];
    statusBadge.className = `status-badge ${passed ? 'success' : 'danger'}`;

    motivationMessage.textContent = translations[currentLang][passed ? 'successMsg' : 'failMsg'];

    let tableHTML = `
        <thead>
            <tr>
                <th>${translations[currentLang].subjectName}</th>
                <th>${translations[currentLang].coefficient}</th>
                <th>${translations[currentLang].type}</th>
                <th>${translations[currentLang].grades}</th>
                <th>${translations[currentLang].finalGrade}</th>
            </tr>
        </thead>
        <tbody>
    `;

    results.forEach(result => {
        const typeLabel = translations[currentLang][result.type];
        let gradesText = '';

        if (result.type === 'core') {
            gradesText = `${translations[currentLang].continuous}: ${result.continuous || '-'} / ${translations[currentLang].exam}: ${result.exam || '-'}`;
        } else if (result.type === 'examOnly') {
            gradesText = `${translations[currentLang].exam}: ${result.exam || '-'}`;
        } else {
            gradesText = `${translations[currentLang].practical}: ${result.practical || '-'}`;
        }

        tableHTML += `
            <tr>
                <td>${result.name[currentLang]}</td>
                <td>${result.coefficient}</td>
                <td>${typeLabel}</td>
                <td>${gradesText}</td>
                <td><strong>${result.finalGrade}</strong></td>
            </tr>
        `;
    });

    tableHTML += '</tbody>';
    resultsTable.innerHTML = tableHTML;

    resultCard.classList.add('show');
    resultCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    localStorage.setItem('lastAverage', average.toFixed(2));
    localStorage.setItem('lastResults', JSON.stringify(results));
}

function exportToPDF() {
    const pdfLang = currentLang === 'ar' ? 'fr' : currentLang;
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const average = parseFloat(localStorage.getItem('lastAverage')) || 0;
    const results = JSON.parse(localStorage.getItem('lastResults') || '[]');
    const passed = average >= 10;
    const studentName = document.getElementById('studentName').value.trim() || 'Student';

    const pageWidth = doc.internal.pageSize.width;
    const pageHeight = doc.internal.pageSize.height;

    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.setTextColor(26, 84, 144);
    doc.text(translations[pdfLang].pdfTitle, pageWidth / 2, 20, { align: "center" });

    doc.setFontSize(12);
    doc.setTextColor(40);
    const nameLabel = pdfLang === 'fr' ? 'Etudiant' : 'Student';
    doc.text(`${nameLabel} : ${studentName}`, pageWidth / 2, 30, { align: "center" });

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    const date = new Date().toLocaleDateString(
        pdfLang === 'fr' ? 'fr-FR' : 'en-US',
        { year: 'numeric', month: 'long', day: 'numeric' }
    );
    doc.text(`Date : ${date}`, pageWidth / 2, 38, { align: "center" });

    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.setTextColor(passed ? 40 : 220, passed ? 167 : 53, passed ? 69 : 69);
    const avgLabel = pdfLang === 'fr' ? 'Moyenne Semestrielle' : 'Semester Average';
    doc.text(`${avgLabel} : ${average.toFixed(2)}`, pageWidth / 2, 50, { align: "center" });

    doc.setFontSize(13);
    doc.setTextColor(0);
    const statusLabel = pdfLang === 'fr' ? 'Statut' : 'Status';
    const statusValue = passed
        ? (pdfLang === 'fr' ? 'Admis' : 'Passed')
        : (pdfLang === 'fr' ? 'Ajourne' : 'Failed');
    doc.text(`${statusLabel} : ${statusValue}`, pageWidth / 2, 60, { align: "center" });

    const tableHeaders = pdfLang === 'fr'
        ? ['Matiere', 'Coef', 'Type', 'Notes', 'Final']
        : ['Subject', 'Coef', 'Type', 'Grades', 'Final'];

    const tableData = results.map(r => {
        let grades = '';
        if (r.type === 'core') {
            grades = `CC: ${r.continuous || '-'} / Ex: ${r.exam || '-'}`;
        } else if (r.type === 'examOnly') {
            grades = `Ex: ${r.exam || '-'}`;
        } else {
            grades = `TP: ${r.practical || '-'}`;
        }

        const typeText = r.type === 'core'
            ? (pdfLang === 'fr' ? 'Fondamental' : 'Core')
            : r.type === 'examOnly'
                ? (pdfLang === 'fr' ? 'Examen' : 'Exam')
                : (pdfLang === 'fr' ? 'Pratique' : 'Practical');

        const subjectName = r.name[pdfLang] || r.name['fr'] || r.name['en'];

        return [
            subjectName,
            r.coefficient.toString(),
            typeText,
            grades,
            r.finalGrade
        ];
    });

    doc.autoTable({
        head: [tableHeaders],
        body: tableData,
        startY: 68,
        theme: 'striped',
        headStyles: {
            fillColor: [26, 84, 144],
            textColor: 255,
            halign: 'center',
            fontSize: 10,
            fontStyle: 'bold'
        },
        bodyStyles: { 
            halign: 'center', 
            fontSize: 9 
        },
        styles: {
            font: 'helvetica',
            cellPadding: 4,
            lineColor: [200, 200, 200],
            lineWidth: 0.1
        },
        columnStyles: {
            0: { cellWidth: 60, halign: 'left' },
            1: { cellWidth: 15 },
            2: { cellWidth: 25 },
            3: { cellWidth: 55 },
            4: { cellWidth: 20 }
        },
        alternateRowStyles: {
            fillColor: [245, 247, 250]
        }
    });

    const finalY = doc.lastAutoTable.finalY + 12;
    doc.setFont("helvetica", "italic");
    doc.setFontSize(10);
    doc.setTextColor(60);

    const message = passed
        ? translations[pdfLang].successMsg
        : translations[pdfLang].failMsg;

    const splitMsg = doc.splitTextToSize(message, pageWidth - 30);
    doc.text(splitMsg, pageWidth / 2, finalY, { align: 'center' });

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(100);
    doc.text(
        'Developed by Fertas Mohammed Redha',
        pageWidth / 2,
        pageHeight - 15,
        { align: 'center' }
    );

    const fileName = `${studentName.replace(/\s+/g, '-')}-semester-results.pdf`;
    doc.save(fileName);
}

function resetAll() {
    const messages = {
        ar: 'هل أنت متأكد من إعادة تعيين جميع البيانات؟',
        fr: 'Êtes-vous sûr de vouloir réinitialiser toutes les données?',
        en: 'Are you sure you want to reset all data?'
    };

    if (confirm(messages[currentLang])) {
        subjectsData = {};
        localStorage.removeItem('subjectsData');
        localStorage.removeItem('lastAverage');
        localStorage.removeItem('lastResults');
        document.getElementById('resultCard').classList.remove('show');
        initializeSubjectsData();
        renderSubjects();
    }
}

function setLanguage(lang) {
    currentLang = lang;

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    localStorage.setItem('language', lang);
    renderSubjects();
    updateAllTexts();
}

function updateAllTexts() {
    document.getElementById('headerTitle').textContent = translations[currentLang].title;
    document.getElementById('headerSubtitle').textContent = translations[currentLang].subtitle;
    document.getElementById('themeToggle').textContent = translations[currentLang][currentTheme === 'dark' ? 'themeToggleLight' : 'themeToggle'];
    document.getElementById('btnCalculate').textContent = translations[currentLang].calculate;
    document.getElementById('btnReset').textContent = translations[currentLang].reset;
    document.getElementById('btnExport').textContent = translations[currentLang].exportPDF;
    document.getElementById('resultsTitle').textContent = translations[currentLang].resultsTitle;
    document.getElementById('subjectResultsTitle').textContent = translations[currentLang].subjectResults;
    document.getElementById('footerText').textContent = translations[currentLang].footer;
}

function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.body.setAttribute('data-theme', currentTheme);

    document.getElementById('themeToggle').textContent = translations[currentLang][currentTheme === 'dark' ? 'themeToggleLight' : 'themeToggle'];

    localStorage.setItem('theme', currentTheme);
}

function saveToStorage() {
    localStorage.setItem('subjectsData', JSON.stringify(subjectsData));
}

function loadFromStorage() {
    const savedLang = localStorage.getItem('language');
    if (savedLang) {
        currentLang = savedLang;
        document.documentElement.lang = savedLang;
        document.documentElement.dir = savedLang === 'ar' ? 'rtl' : 'ltr';
    }

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        currentTheme = savedTheme;
    }

    const savedData = localStorage.getItem('subjectsData');
    if (savedData) {
        try {
            subjectsData = JSON.parse(savedData);
        } catch (e) {
            subjectsData = {};
        }
    }

    const savedName = localStorage.getItem('studentName');
    if (savedName) {
        const nameInput = document.getElementById('studentName');
        if (nameInput) nameInput.value = savedName;
    }

    setTimeout(() => {
        const nameInput = document.getElementById('studentName');
        if (nameInput) {
            nameInput.addEventListener('input', function () {
                localStorage.setItem('studentName', this.value);
            });
        }
    }, 100);
}

window.addEventListener('DOMContentLoaded', init);

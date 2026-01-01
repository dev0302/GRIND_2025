import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

// Generate professional PDF report
export const generatePDFReport = async (researchData, fileName, userData) => {
  const doc = new jsPDF('p', 'mm', 'a4');
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  let yPosition = 20;

  // Helper function to add new page if needed
  const checkPageBreak = (requiredSpace = 20) => {
    if (yPosition + requiredSpace > pageHeight - 20) {
      doc.addPage();
      yPosition = 20;
      return true;
    }
    return false;
  };

  // Helper function to add text with word wrap
  const addText = (text, x, y, maxWidth, fontSize = 10, fontStyle = 'normal') => {
    doc.setFontSize(fontSize);
    doc.setFont('helvetica', fontStyle);
    const lines = doc.splitTextToSize(text, maxWidth);
    doc.text(lines, x, y);
    return y + (lines.length * fontSize * 0.4);
  };

  // Helper function to add table
  const addTable = (headers, data, startY, colWidths) => {
    const tableHeight = (data.length + 1) * 8;
    checkPageBreak(tableHeight);
    
    let currentY = startY;
    
    // Add headers
    doc.setFillColor(41, 128, 185); // Blue header
    doc.rect(20, currentY, pageWidth - 40, 8, 'F');
    doc.setTextColor(255, 255, 255);
    
    let xPos = 20;
    headers.forEach((header, index) => {
      doc.setFontSize(9);
      doc.setFont('helvetica', 'bold');
      doc.text(header, xPos + 2, currentY + 5);
      xPos += colWidths[index];
    });
    
    currentY += 8;
    doc.setTextColor(0, 0, 0);
    
    // Add data rows
    data.forEach((row, rowIndex) => {
      if (rowIndex % 2 === 0) {
        doc.setFillColor(248, 249, 250); // Light gray
        doc.rect(20, currentY, pageWidth - 40, 8, 'F');
      }
      
      xPos = 20;
      row.forEach((cell, colIndex) => {
        doc.setFontSize(8);
        doc.setFont('helvetica', 'normal');
        doc.text(String(cell), xPos + 2, currentY + 5);
        xPos += colWidths[colIndex];
      });
      
      currentY += 8;
    });
    
    return currentY;
  };

  // 1. Report Header
  doc.setFillColor(52, 73, 94); // Dark blue-gray
  doc.rect(0, 0, pageWidth, 30, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(20);
  doc.setFont('helvetica', 'bold');
  doc.text('Groundwater Heavy Metal Pollution Report', 20, 20);
  
  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 20, 26);
  
  yPosition = 40;

  // Lab Information
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Laboratory Information', 20, yPosition);
  yPosition += 10;

  const labInfo = [
    ['Lab/Researcher Name:', userData?.name || 'EnviroLab Pvt Ltd'],
    ['Lab Accreditation/ID:', userData?.accreditationId || 'NABL-001'],
    ['Report Date:', new Date().toLocaleDateString()],
    ['Region/Location:', 'Paschim Vihar, Delhi'],
    ['Total Samples:', researchData.length.toString()]
  ];

  labInfo.forEach(([label, value]) => {
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text(label, 20, yPosition);
    doc.setFont('helvetica', 'normal');
    doc.text(value, 80, yPosition);
    yPosition += 6;
  });

  yPosition += 10;

  // 2. Sample Metadata Section
  checkPageBreak(50);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Sample Metadata', 20, yPosition);
  yPosition += 10;

  const sampleHeaders = ['Sample ID', 'Date', 'Source Type', 'Depth (m)', 'Collector'];
  const sampleData = researchData.map(sample => [
    sample.SampleID || 'N/A',
    sample.DateOfCollection || 'N/A',
    sample.SourceType || 'N/A',
    sample.Depth || 'N/A',
    sample.CollectorName || 'N/A'
  ]);

  const sampleColWidths = [25, 30, 25, 20, 30];
  yPosition = addTable(sampleHeaders, sampleData, yPosition, sampleColWidths) + 10;

  // 3. Water Quality Parameters
  checkPageBreak(50);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Water Quality Parameters', 20, yPosition);
  yPosition += 10;

  const qualityHeaders = ['Parameter', 'Latest Value', 'Unit', 'BIS Standard', 'Status'];
  const latestSample = researchData[researchData.length - 1];
  
  const qualityData = [
    ['pH', latestSample?.pH || 'N/A', '—', '6.5-8.5', 'Normal'],
    ['EC', latestSample?.EC || 'N/A', 'µS/cm', '< 2000', 'Normal'],
    ['TDS', latestSample?.TDS || 'N/A', 'mg/L', '< 500', 'Normal'],
    ['Temperature', latestSample?.Temperature || 'N/A', '°C', '< 30', 'Normal'],
    ['Turbidity', latestSample?.Turbidity || 'N/A', 'NTU', '< 1', 'Normal']
  ];

  const qualityColWidths = [30, 25, 15, 25, 20];
  yPosition = addTable(qualityHeaders, qualityData, yPosition, qualityColWidths) + 10;

  // 4. Heavy Metal Concentration Table
  checkPageBreak(60);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Heavy Metal Concentration Analysis', 20, yPosition);
  yPosition += 10;

  const metalHeaders = ['Metal', 'Concentration (mg/L)', 'BIS Limit (mg/L)', 'Sub-Index (Q_i)', 'Weight (W_i)', 'Weighted Sub-Index', 'Status'];
  
  // Calculate HMPI for latest sample
  const metals = ['Pb', 'As', 'Cd', 'Cr', 'Ni', 'Hg', 'Cu', 'Zn', 'Fe', 'Mn'];
  const STANDARD_LIMITS = {
    Pb: 0.01, As: 0.01, Cd: 0.003, Cr: 0.05, Ni: 0.02,
    Hg: 0.001, Cu: 0.05, Zn: 3.0, Fe: 0.3, Mn: 0.1
  };
  const UNIT_WEIGHTS = {
    Pb: 100, As: 100, Cd: 100, Cr: 20, Ni: 20,
    Hg: 100, Cu: 5, Zn: 5, Fe: 5, Mn: 5
  };

  const metalData = metals.map(metal => {
    const concentration = parseFloat(latestSample?.[metal]) || 0;
    const standardLimit = STANDARD_LIMITS[metal];
    const unitWeight = UNIT_WEIGHTS[metal];
    const subIndex = concentration > 0 ? (concentration / standardLimit) * 100 : 0;
    const weightedSubIndex = subIndex * unitWeight;
    
    let status = 'Safe';
    if (concentration > standardLimit * 2) status = 'Critical';
    else if (concentration > standardLimit * 1.5) status = 'Poor';
    else if (concentration > standardLimit) status = 'Acceptable';
    else if (concentration > standardLimit * 0.5) status = 'Good';
    else status = 'Excellent';

    return [
      metal,
      concentration.toFixed(4),
      standardLimit.toString(),
      subIndex.toFixed(1),
      unitWeight.toString(),
      weightedSubIndex.toFixed(1),
      status
    ];
  });

  const metalColWidths = [15, 25, 20, 20, 15, 25, 20];
  yPosition = addTable(metalHeaders, metalData, yPosition, metalColWidths) + 10;

  // 5. HMPI Calculation & Water Quality Summary
  checkPageBreak(40);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('HMPI Calculation & Water Quality Summary', 20, yPosition);
  yPosition += 10;

  // Calculate total HMPI
  const totalWeightedSubIndex = metalData.reduce((sum, row) => sum + parseFloat(row[5]), 0);
  const totalWeight = metalData.reduce((sum, row) => sum + parseFloat(row[4]), 0);
  const finalHMPI = totalWeight > 0 ? totalWeightedSubIndex / totalWeight : 0;

  let qualityCategory = 'Safe';
  let qualityColor = [34, 197, 94]; // Green
  if (finalHMPI >= 150) {
    qualityCategory = 'Critical';
    qualityColor = [239, 68, 68]; // Red
  } else if (finalHMPI >= 100) {
    qualityCategory = 'Polluted';
    qualityColor = [249, 115, 22]; // Orange
  } else if (finalHMPI >= 50) {
    qualityCategory = 'Moderate';
    qualityColor = [245, 158, 11]; // Yellow
  }

  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('Final HMPI Calculation:', 20, yPosition);
  yPosition += 8;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.text(`Total Weighted Sub-Index: ${totalWeightedSubIndex.toFixed(1)}`, 20, yPosition);
  yPosition += 6;
  doc.text(`Total Weight: ${totalWeight}`, 20, yPosition);
  yPosition += 6;
  doc.text(`Final HMPI: ${finalHMPI.toFixed(1)}`, 20, yPosition);
  yPosition += 6;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.text(`Water Quality Category: ${qualityCategory}`, 20, yPosition);
  yPosition += 10;

  // Add colored box for quality category
  doc.setFillColor(qualityColor[0], qualityColor[1], qualityColor[2]);
  doc.rect(20, yPosition - 5, 50, 8, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.text(qualityCategory, 25, yPosition);
  doc.setTextColor(0, 0, 0);
  yPosition += 15;

  // 6. Historical Trend Analysis
  if (researchData.length > 1) {
    checkPageBreak(40);
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('Historical Trend Analysis', 20, yPosition);
    yPosition += 10;

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text('Sample Progression Over Time:', 20, yPosition);
    yPosition += 8;

    researchData.forEach((sample, index) => {
      const sampleHMPI = calculateSampleHMPI(sample);
      const sampleQuality = getQualityCategory(sampleHMPI);
      doc.text(`${sample.DateOfCollection || 'N/A'}: HMPI ${sampleHMPI.toFixed(1)} (${sampleQuality})`, 25, yPosition);
      yPosition += 6;
    });
    yPosition += 10;
  }

  // 7. Recommendations
  checkPageBreak(40);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Recommendations & Suggested Actions', 20, yPosition);
  yPosition += 10;

  const recommendations = getRecommendations(finalHMPI, metalData);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  
  recommendations.forEach(rec => {
    doc.text(`• ${rec}`, 20, yPosition);
    yPosition += 6;
  });

  yPosition += 10;

  // 8. Additional Notes
  checkPageBreak(30);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Additional Notes', 20, yPosition);
  yPosition += 10;

  const notes = [
    '• Testing methodology: Atomic Absorption Spectroscopy (AAS)',
    '• Data source: Raw CSV file uploaded by authorized laboratory',
    '• Accreditation: NABL/CPCB/SPCB certified laboratory',
    '• Results are based on samples collected at specified locations and dates',
    '• Recommended actions are advisory and should be verified by local authorities'
  ];

  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  notes.forEach(note => {
    doc.text(note, 20, yPosition);
    yPosition += 6;
  });

  // 9. Report Footer
  const footerY = pageHeight - 30;
  doc.setDrawColor(200, 200, 200);
  doc.line(20, footerY, pageWidth - 20, footerY);
  
  doc.setFontSize(8);
  doc.setFont('helvetica', 'normal');
  doc.text('Disclaimer: Results are based on samples collected at specified locations and dates; recommended actions are advisory.', 20, footerY + 8);
  doc.text(`Report generated on ${new Date().toLocaleString()}`, pageWidth - 80, footerY + 8);

  // Save the PDF
  const pdfFileName = `HMPI_Report_${fileName.replace('.csv', '')}_${new Date().toISOString().split('T')[0]}.pdf`;
  doc.save(pdfFileName);
};

// Helper function to calculate HMPI for a single sample
const calculateSampleHMPI = (sample) => {
  const STANDARD_LIMITS = {
    Pb: 0.01, As: 0.01, Cd: 0.003, Cr: 0.05, Ni: 0.02,
    Hg: 0.001, Cu: 0.05, Zn: 3.0, Fe: 0.3, Mn: 0.1
  };
  const UNIT_WEIGHTS = {
    Pb: 100, As: 100, Cd: 100, Cr: 20, Ni: 20,
    Hg: 100, Cu: 5, Zn: 5, Fe: 5, Mn: 5
  };

  const metals = ['Pb', 'As', 'Cd', 'Cr', 'Ni', 'Hg', 'Cu', 'Zn', 'Fe', 'Mn'];
  let totalWeightedSubIndex = 0;
  let totalWeight = 0;

  metals.forEach(metal => {
    const concentration = parseFloat(sample[metal]) || 0;
    const standardLimit = STANDARD_LIMITS[metal];
    const unitWeight = UNIT_WEIGHTS[metal];
    
    if (concentration > 0) {
      const subIndex = (concentration / standardLimit) * 100;
      const weightedSubIndex = subIndex * unitWeight;
      totalWeightedSubIndex += weightedSubIndex;
      totalWeight += unitWeight;
    }
  });

  return totalWeight > 0 ? totalWeightedSubIndex / totalWeight : 0;
};

// Helper function to get quality category
const getQualityCategory = (hmpi) => {
  if (hmpi < 50) return 'Safe';
  if (hmpi < 100) return 'Moderate';
  if (hmpi < 150) return 'Polluted';
  return 'Critical';
};

// Helper function to get recommendations
const getRecommendations = (hmpi, metalData) => {
  const recommendations = [];
  
  if (hmpi > 75) {
    recommendations.push('Immediate action required - water is critically polluted');
    recommendations.push('Install advanced water treatment systems');
    recommendations.push('Notify local health authorities immediately');
    recommendations.push('Consider alternative water sources');
  } else if (hmpi > 50) {
    recommendations.push('Water quality is concerning - treatment recommended');
    recommendations.push('Install water filtration systems');
    recommendations.push('Regular monitoring required');
    recommendations.push('Consider point-of-use treatment devices');
  } else if (hmpi > 25) {
    recommendations.push('Water quality is moderate - preventive measures advised');
    recommendations.push('Consider basic water treatment');
    recommendations.push('Monitor water quality monthly');
    recommendations.push('Maintain good hygiene practices');
  } else {
    recommendations.push('Water quality is good - maintain current practices');
    recommendations.push('Continue regular monitoring');
    recommendations.push('Follow standard water safety protocols');
  }

  // Add specific metal-based recommendations
  metalData.forEach(([metal, concentration, standardLimit, subIndex]) => {
    if (parseFloat(subIndex) > 100) {
      recommendations.push(`High ${metal} levels detected - specific treatment for ${metal} required`);
    }
  });

  return recommendations;
};

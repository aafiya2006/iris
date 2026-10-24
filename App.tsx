import React, { useState } from 'react';
import { ViewMode, CameraPreset } from './types';
import { Header } from './components/Header';
import { NavigationDrawer } from './components/NavigationDrawer';
import { ModelViewer } from './components/Viewer3D/ModelViewer';
import { CADMetricsPanel } from './components/Viewer3D/CADMetricsPanel';
import { VoiceAssistantPanel } from './components/VoiceAssistant/VoiceAssistantPanel';
import { ContinuousRecordingPanel } from './components/Recording/ContinuousRecordingPanel';
import { HardwareComponentsPanel } from './components/Hardware/HardwareComponentsPanel';
import { SoftwareArchitecturePanel } from './components/Software/SoftwareArchitecturePanel';
import { BatteryThermalPanel } from './components/BatteryThermal/BatteryThermalPanel';
import { CostEstimatePanel } from './components/CostEstimate/CostEstimatePanel';
import { SafetyPrivacyPanel } from './components/SafetyPrivacy/SafetyPrivacyPanel';
import { ArchitectureDiagram } from './components/ArchitectureDiagram';
import { Eye, User, Layers, Sparkles, Volume2, Video, Cpu, ShieldCheck } from 'lucide-react';

export default function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [currentViewMode, setCurrentViewMode] = useState<ViewMode>('view-a');
  const [activePreset, setActivePreset] = useState<CameraPreset>('human-fit');
  const [isRecordingActive, setIsRecordingActive] = useState(false);

  const handleSelectViewMode = (mode: ViewMode) => {
    setCurrentViewMode(mode);
    if (mode === 'view-a') {
      setActivePreset('human-fit');
    } else if (mode === 'view-b') {
      setActivePreset('exploded');
    } else if (mode === 'view-c') {
      setActivePreset('close-up');
    }
  };

  const handleToggleRecording = () => {
    setIsRecordingActive((prev) => !prev);
  };

  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-100 flex flex-col antialiased selection:bg-teal-500 selection:text-slate-950 font-sans min-w-0">
      {/* Top Header */}
      <Header
        onOpenDrawer={() => setIsDrawerOpen(true)}
        currentViewMode={currentViewMode}
        onSelectViewMode={handleSelectViewMode}
        isRecordingActive={isRecordingActive}
      />

      {/* Slide-out Mobile Navigation Drawer */}
      <NavigationDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        currentViewMode={currentViewMode}
        onSelectViewMode={handleSelectViewMode}
        onSelectPreset={(preset) => setActivePreset(preset)}
        activePreset={activePreset}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-3 sm:px-6 py-4 sm:py-6 flex flex-col gap-8 min-w-0">
        {/* Section 1: Product Hero & 3D Interactive Scene */}
        <section className="flex flex-col gap-4">
          {/* Executive Subtitle & Status Banner */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-teal-400 mb-1">
                <span>IRIS MODEL 3</span>
                <span>·</span>
                <span>PHYSICAL CAD SPECIFICATION</span>
              </div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
                Standalone Offline AI Vision Neckband
              </h1>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl leading-relaxed">
                A screenless, ergonomic wearable AI vision assistant designed for blind and low-vision individuals. Features continuous local video recording, on-device neural scene comprehension, and low-latency spoken feedback in multiple languages.
              </p>
            </div>

            {/* Quick Status Pill */}
            <div className="self-start sm:self-auto flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-xl px-3 py-1.5 text-xs">
              <span className="text-slate-400">Wearing Scene:</span>
              <span className="font-semibold text-teal-300">Adult Human Bust Active</span>
            </div>
          </div>

          {/* Interactive 3D Model Viewer Container */}
          <ModelViewer
            viewMode={currentViewMode}
            onViewModeChange={handleSelectViewMode}
            activePreset={activePreset}
            onPresetChange={setActivePreset}
            isRecordingActive={isRecordingActive}
          />

          {/* Collapsible CAD Metrics Panel */}
          <CADMetricsPanel />
        </section>

        {/* Section 2: Multilingual Voice Assistant (IRIS Voice & Language) */}
        <VoiceAssistantPanel
          isRecordingActive={isRecordingActive}
          onSimulateRecordingToggle={handleToggleRecording}
        />

        {/* Section 3: Continuous Local Video Recording Pipeline */}
        <ContinuousRecordingPanel
          isRecording={isRecordingActive}
          onToggleRecording={handleToggleRecording}
        />

        {/* Section 4: Hardware Subsystems & 11 Components */}
        <HardwareComponentsPanel />

        {/* Section 5: View D - System Architecture & Bus Schematic */}
        <ArchitectureDiagram />

        {/* Section 6: Embedded Linux Software Daemons (12 Services) */}
        <SoftwareArchitecturePanel />

        {/* Section 7: Battery Runtime & Thermal Dissipation */}
        <BatteryThermalPanel />

        {/* Section 8: Provisional Prototype Budget */}
        <CostEstimatePanel />

        {/* Section 9: Accessibility, Safety & Privacy */}
        <SafetyPrivacyPanel />
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-slate-800/80 bg-slate-950 py-6 sm:py-8 mt-12 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span className="font-bold text-slate-300">IRIS Model 3</span>
            <span>·</span>
            <span>Standalone Offline Assistive Vision Hardware Prototype</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] font-mono">
            <span>Provisional CAD Rev 3.2</span>
            <span>·</span>
            <span className="text-teal-400">Zero Cloud Dependency</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

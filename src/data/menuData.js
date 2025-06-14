import { 
  Home, 
  Users, 
  FolderKanban, 
  CalendarDays, 
  HelpCircle, 
  Gavel, 
  ConciergeBell,
  Building2
} from 'lucide-react';

export const menuItems = [
  { id: 'inicio', label: 'Inicio', icon: Home },
  { id: 'empresa', label: 'Nuestra Empresa', icon: Building2 },
  { id: 'proyectos', label: 'Proyectos', icon: FolderKanban },
  { id: 'normatividad', label: 'Normatividad', icon: Gavel },
  { id: 'preguntas', label: 'Preguntas Frecuentes', icon: HelpCircle },
  { id: 'servicios', label: 'Servicios al Usuario', icon: ConciergeBell },
  { id: 'eventos', label: 'Eventos', icon: CalendarDays }
];
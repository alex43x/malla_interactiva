// ================= CONSTANTES DE DIMENSIONES =================

const DIMENSIONS = {
  SEMESTER_WIDTH: 360,   // Más espacio horizontal para que las uniones se desvíen antes de los nodos
  NODE_START_Y: 80,      // Posición vertical inicial de los nodos
  NODE_SPACING_Y: 122,   // Más separación vertical para mejorar la lectura
  NODE_MARGIN: { top: 10, right: 16, bottom: 10, left: 16 },
  NODE_MAX_WIDTH: 220,   // ≈ 28-32 caracteres dependiendo de la fuente
};

// ================= CONSTANTES DE COLORES =================

const COLORS = {
  NODE_TEXT: "#f8fafc", // slate-50 para máximo contraste sobre fondo oscuro

  // Colores de semestres — azules vibrantes y modernos
  NODE_BG_ODD:     "#2563eb",   // blue-600
  NODE_BG_EVEN:    "#0ea5e9",   // sky-500
  NODE_BORDER_ODD:  "#60a5fa",  // blue-400
  NODE_BORDER_EVEN: "#7dd3fc",  // sky-300

  // Estado: seleccionado (hover)
  NODE_HIGHLIGHT_BG:     "#020617",  // slate-950
  NODE_HIGHLIGHT_BORDER: "#38bdf8",  // sky-400 brillante

  // Estado: pre-requisito (padre) - borde verde brillante
  NODE_PARENT_BG:     "#064e3b",  // emerald-900 oscuro
  NODE_PARENT_BORDER: "#22c55e",  // green-500

  // Estado: lo que desbloquea (hijo) - borde azul brillante
  NODE_CHILD_BG:     "#1e3a8a",   // blue-900 oscuro
  NODE_CHILD_BORDER: "#3b82f6",  // blue-500

  // Aristas
  EDGE_NORMAL:       "#94a3b8",  // slate-400 (más visible que el slate-300 de antes)
  EDGE_OPACITY:      0.85,
  EDGE_PARENT_COLOR: "#22c55e",  // green-500
  EDGE_CHILD_COLOR:  "#3b82f6",  // blue-500
};

// ================= CONSTANTES DE FUENTES =================

const FONTS = {
  NODE_SIZE:    13,
  NODE_FACE:    "Inter, -apple-system, Arial, sans-serif",
  BADGE_SIZE:   9,
  BADGE_COLOR:  "rgba(255,255,255,0.7)", // texto claro semitransparente para badges
};

// ============== CONFIGURACIÓN BASE PARA NODOS Y ARISTAS ==============

const NODE_COMMON_CONFIG = {
  shape: "box",
  fixed: true,
  physics: false,
  margin: DIMENSIONS.NODE_MARGIN,
  font: {
    size: FONTS.NODE_SIZE,
    face: FONTS.NODE_FACE,
    color: COLORS.NODE_TEXT,
    multi: true,        // habilita etiquetas HTML (<b>, <i>)
    bold: {             // estilo de los fragmentos <b>...</b>
      size: FONTS.BADGE_SIZE,
      color: FONTS.BADGE_COLOR,
      mod: "bold",
    },
  },
  borderWidth: 1.5,
  shadow: {
    enabled: true,
    color: "rgba(0,0,0,0.12)", // Sombra más profunda para mayor relieve
    size: 14,
    x: 0,
    y: 6,
  },
  shapeProperties: {
    borderRadius: 8, // Da un aspecto moderno redondeado como la imagen
  },
  widthConstraint: {
    maximum: DIMENSIONS.NODE_MAX_WIDTH,
  },
};

const EDGES_COMMON_CONFIG = {
  arrows: {
    to: {
      enabled: true,
      scaleFactor: 0.75,
      type: "arrow",
    },
  },
  smooth: {
    type: "cubicBezier",
    forceDirection: "horizontal",
    roundness: 0.18,
  },
  color: {
    color:     COLORS.EDGE_NORMAL,
    opacity:   COLORS.EDGE_OPACITY,
    highlight: COLORS.EDGE_NORMAL,
    hover:     COLORS.EDGE_NORMAL,
    inherit:   false,
  },
  width: 2.3,
  hoverWidth: 0,
  selectionWidth: 0,
  dashes: false,
  shadow: {
    enabled: false,
  },
};

const SEMESTERS_TITLE_STYLE = {
  y: 22,
  fixed: true,
  physics: false,
  font: {
    size: 18,
    bold: true,
    color: "#94a3b8",   // slate-400
    face: "Inter, Arial, sans-serif",
  },
  shape: "text",
};

// ================= ESTILOS DE NODOS (hover / parent / child / reset) =================

const NODE_STYLE_BASE = {
  font: {
    color: COLORS.NODE_TEXT,
    size: FONTS.NODE_SIZE,
    bold: { size: FONTS.BADGE_SIZE, color: FONTS.BADGE_COLOR },
  },
  borderWidth: 1.5,
  shadow: {
    enabled: true,
    color: "rgba(0,0,0,0.12)",
    size: 14,
    x: 0,
    y: 6,
  },
  opacity: 1,
};

const NODE_STYLE_DEFAULT_FADED = { opacity: 0.12 };

const NODE_STYLE_HOVER = {
  color: {
    background: COLORS.NODE_HIGHLIGHT_BG,
    border:     COLORS.NODE_HIGHLIGHT_BORDER,
  },
  font: {
    color: "#f8fafc", // texto claro
    size: FONTS.NODE_SIZE,
    bold: { size: FONTS.BADGE_SIZE, color: "rgba(248,250,252,0.7)" },
  },
  borderWidth: 2.5,
  shadow: {
    enabled: true,
    color: "rgba(56,189,248,0.6)", // brillo celeste más intenso
    size: 24,
    x: 0,
    y: 0,
  },
  opacity: 1,
};

const NODE_STYLE_PARENT = {
  color: {
    background: COLORS.NODE_PARENT_BG,
    border:     COLORS.NODE_PARENT_BORDER,
  },
  font: {
    color: "#f8fafc", // texto claro
    size: FONTS.NODE_SIZE,
    bold: { size: FONTS.BADGE_SIZE, color: "rgba(248,250,252,0.7)" },
  },
  borderWidth: 2.5,
  shadow: {
    enabled: true,
    color: "rgba(34,197,94,0.5)", // brillo verde más intenso
    size: 24,
    x: 0,
    y: 0,
  },
  opacity: 1,
};

const NODE_STYLE_CHILD = {
  color: {
    background: COLORS.NODE_CHILD_BG,
    border:     COLORS.NODE_CHILD_BORDER,
  },
  font: {
    color: "#f8fafc", // texto claro
    size: FONTS.NODE_SIZE,
    bold: { size: FONTS.BADGE_SIZE, color: "rgba(248,250,252,0.7)" },
  },
  borderWidth: 2.5,
  shadow: {
    enabled: true,
    color: "rgba(59,130,246,0.5)", // brillo azul más intenso
    size: 24,
    x: 0,
    y: 0,
  },
  opacity: 1,
};

// ================= VARIABLES GLOBALES =================

let allSubjects = {};
let nodes;
let edges;
let network;
let semestersCount = 0;
let _showRelationsRef = null;   // Referencia pública a showRelations (para chips del modal)

// ===================== PUBLIC API =====================

function prepareGraphData(data) {
  semestersCount = data.career.totalSemesters;

  const subjectsBySemester = _groupSubjectsBySemester(data.subjects, semestersCount);
  const semesterTitles = _createSemesterTitles();
  const created = _createSubjectNodes(subjectsBySemester);

  allSubjects = created.allSubjects;
  nodes = new vis.DataSet([...semesterTitles, ...created.nodesArray]);
  edges = new vis.DataSet(_createEdges(allSubjects));
}

function renderGraph(elementId) {
  const element = document.getElementById(elementId);
  if (!element) return;

  // Destruir red anterior para evitar memory leaks al cambiar de carrera
  if (network) {
    network.destroy();
    network = null;
    _showRelationsRef = null;
  }

  const options = _createVisOptions();
  network = new vis.Network(element, { nodes, edges }, options);
  _setupNetworkEvents(network, allSubjects, nodes, edges);
  network.fit();
}

/**
 * Permite resaltar un nodo desde fuera de graph_lib.js
 * (usado por los chips de pre-requisitos del modal).
 */
function highlightNode(id) {
  if (_showRelationsRef) _showRelationsRef(id);
}

// ================= TIPO DE MATERIA =================

function _getSubjectType(id) {
  const lower = String(id).toLowerCase();
  if (lower.includes("electiva")) return "ELE";
  if (lower.includes("optativa")) return "OPT";
  return "OBL";
}

// ================= FUNCIONES AUXILIARES =================

function _createSubjectNodes(semesters) {
  const allSubjectsLocal = {};
  const nodesArray = [];

  for (let sem = 1; sem <= semestersCount; sem++) {
    const subjects = semesters[sem];
    const ids = Object.keys(subjects).sort((a, b) =>
      subjects[a].name.localeCompare(subjects[b].name)
    );

    const xBase    = (sem - 1) * DIMENSIONS.SEMESTER_WIDTH;
    const isEven   = sem % 2 === 0;
    const bgColor  = isEven ? COLORS.NODE_BG_EVEN    : COLORS.NODE_BG_ODD;
    const brColor  = isEven ? COLORS.NODE_BORDER_EVEN : COLORS.NODE_BORDER_ODD;

    ids.forEach((id, i) => {
      const subject = subjects[id];
      const badge   = _getSubjectType(id);

      allSubjectsLocal[id] = {
        ...subject,
        sem,
        pre: subject.prerequisites || [],
        badge,
      };

      nodesArray.push({
        id,
        label: `${subject.name}\n<b>${badge}</b>`,  // 2ª línea: badge pequeño
        x: xBase,
        y: DIMENSIONS.NODE_START_Y + i * DIMENSIONS.NODE_SPACING_Y,
        ...NODE_COMMON_CONFIG,
        color: {
          background: bgColor,
          border:     brColor,
          highlight: {
            background: COLORS.NODE_HIGHLIGHT_BG,
            border:     COLORS.NODE_HIGHLIGHT_BORDER,
          },
          hover: {
            background: COLORS.NODE_HIGHLIGHT_BG,
            border:     COLORS.NODE_HIGHLIGHT_BORDER,
          },
        },
      });
    });
  }

  return { allSubjects: allSubjectsLocal, nodesArray };
}

function _createEdges(allSubjectsLocal) {
  const edgesArray = [];

  for (const [id, subject] of Object.entries(allSubjectsLocal)) {
    for (const pre of subject.pre) {
      edgesArray.push({
        id: `${pre}-${id}`,
        from: pre,
        to:   id,
        ...EDGES_COMMON_CONFIG,
      });
    }
  }

  return edgesArray;
}

function _createSemesterTitles() {
  const titles = [];

  for (let i = 1; i <= semestersCount; i++) {
    titles.push({
      id:    `title-sem-${i}`,
      label: `Sem. ${i}`,
      x:     (i - 1) * DIMENSIONS.SEMESTER_WIDTH,
      ...SEMESTERS_TITLE_STYLE,
    });
  }

  return titles;
}

function _createVisOptions() {
  return {
    interaction: {
      hover:     true,
      dragView:  true,
      zoomView:  true,
      tooltipDelay: 9999999,  // desactiva el tooltip nativo de vis-network
    },
    physics: false,
    layout: { hierarchical: false },
  };
}

// ================= EVENTOS =================

function _setupNetworkEvents(net, allSubs, nodesDs, edgesDs) {
  const isSemesterTitle = (nodeId) => String(nodeId).startsWith("title-sem-");
  const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
  const tooltip = document.getElementById("node-tooltip");

  // ── Calcular color base de un nodo según su semestre ──
  function _originalColor(id) {
    const sub = allSubs[id];
    if (!sub) return null;
    const even = sub.sem % 2 === 0;
    return {
      background: even ? COLORS.NODE_BG_EVEN    : COLORS.NODE_BG_ODD,
      border:     even ? COLORS.NODE_BORDER_EVEN : COLORS.NODE_BORDER_ODD,
      highlight: {
        background: COLORS.NODE_HIGHLIGHT_BG,
        border:     COLORS.NODE_HIGHLIGHT_BORDER,
      },
      hover: {
        background: COLORS.NODE_HIGHLIGHT_BG,
        border:     COLORS.NODE_HIGHLIGHT_BORDER,
      },
    };
  }

  // ── Resaltar nodo y sus relaciones ──
  function showRelations(id) {
    const parents  = _getAllParents(id, allSubs);
    const children = _getDirectChildren(id, allSubs);

    // Actualizar estilos de nodos
    const nodeUpdates = nodesDs.map((node) => {
      if (isSemesterTitle(node.id)) return { id: node.id };

      if (node.id === id)           return { id: node.id, ...NODE_STYLE_HOVER };
      if (parents.has(node.id))     return { id: node.id, ...NODE_STYLE_PARENT };
      if (children.has(node.id))    return { id: node.id, ...NODE_STYLE_CHILD };

      return { id: node.id, ...NODE_STYLE_DEFAULT_FADED };
    });

    // Actualizar colores de aristas
    const edgeUpdates = edgesDs.map((edge) => {
      const fromInParents  = parents.has(edge.from);
      const toInParents    = parents.has(edge.to);
      const toIsHovered    = edge.to   === id;
      const fromIsHovered  = edge.from === id;
      const toInChildren   = children.has(edge.to);

      // Arista dentro de la cadena de pre-requisitos → verde
      if (fromInParents && (toInParents || toIsHovered)) {
        return {
          id: edge.id,
          hidden: false,
          color: {
            color:     COLORS.EDGE_PARENT_COLOR,
            highlight: COLORS.EDGE_PARENT_COLOR,
            hover:     COLORS.EDGE_PARENT_COLOR,
            inherit:   false,
            opacity:   1,
          },
          width: 3.2,
          shadow: {
            enabled: true,
            color: "rgba(34, 197, 94, 0.35)",
            size: 10,
            x: 0,
            y: 2,
          },
        };
      }

      // Arista desde el nodo seleccionado hacia sus hijos → azul
      if (fromIsHovered && toInChildren) {
        return {
          id: edge.id,
          hidden: false,
          color: {
            color:     COLORS.EDGE_CHILD_COLOR,
            highlight: COLORS.EDGE_CHILD_COLOR,
            hover:     COLORS.EDGE_CHILD_COLOR,
            inherit:   false,
            opacity:   1,
          },
          width: 3.2,
          shadow: {
            enabled: true,
            color: "rgba(59, 130, 246, 0.35)",
            size: 10,
            x: 0,
            y: 2,
          },
        };
      }

      // Arista no relacionada → ocultar
      return { id: edge.id, hidden: true };
    });

    nodesDs.update(nodeUpdates.filter((u) => Object.keys(u).length > 1));
    edgesDs.update(edgeUpdates);
  }

  // ── Resetear todos los estilos al estado original ──
  function resetGraphStyles() {
    const allNodeUpdates = nodesDs.map((node) => {
      if (isSemesterTitle(node.id)) return { id: node.id };
      return {
        id: node.id,
        ...NODE_STYLE_BASE,
        color: _originalColor(node.id) || undefined,
        opacity: 1,
      };
    });

    const allEdgeUpdates = edgesDs.map((edge) => ({
      id: edge.id,
      hidden: false,
      color: {
        color:     COLORS.EDGE_NORMAL,
        opacity:   COLORS.EDGE_OPACITY,
        highlight: COLORS.EDGE_NORMAL,
        hover:     COLORS.EDGE_NORMAL,
        inherit:   false,
      },
      width: 2.3,
      dashes: false,
      shadow: {
        enabled: false,
      },
    }));

    nodesDs.update(allNodeUpdates.filter((u) => Object.keys(u).length > 1));
    edgesDs.update(allEdgeUpdates);
  }

  // ── Tooltip flotante ──
  function showTooltip(domX, domY, id) {
    if (!tooltip) return;
    const sub = allSubs[id];
    if (!sub) return;

    document.getElementById("tooltip-name").textContent = sub.name;

    const badgeEl = document.getElementById("tooltip-badge");
    const badge   = sub.badge || "OBL";
    badgeEl.textContent = badge;
    badgeEl.className   = `tooltip-badge badge-${badge}`;

    document.getElementById("tooltip-credits").textContent = `${sub.credits} cr.`;
    document.getElementById("tooltip-hours").textContent   = `${sub.weekly_hours}h/sem`;

    // Posicionar evitando que se salga de la ventana
    const ttW = 240, ttH = 72;
    let left = domX + 18;
    let top  = domY - 10;
    if (left + ttW > window.innerWidth  - 10) left = domX - ttW - 10;
    if (top  + ttH > window.innerHeight - 10) top  = domY - ttH - 10;
    if (top < 10) top = 10;

    tooltip.style.left = `${left}px`;
    tooltip.style.top  = `${top}px`;
    tooltip.classList.add("visible");
  }

  function hideTooltip() {
    if (tooltip) tooltip.classList.remove("visible");
  }

  // Exponer referencia para poder resaltar desde fuera (chips del modal)
  _showRelationsRef = showRelations;

  // ================= DESKTOP =================
  if (!isTouch) {
    net.on("hoverNode", (params) => {
      const id = params.node;
      if (isSemesterTitle(id)) return;
      showRelations(id);
      const { x, y } = params.pointer.DOM;
      showTooltip(x, y, id);
    });

    net.on("blurNode", () => {
      resetGraphStyles();
      hideTooltip();
    });

    net.on("click", (params) => {
      if (!params.nodes.length) {
        // Click en fondo → resetear estilos si quedaron bloqueados
        resetGraphStyles();
        return;
      }
      const id = params.nodes[0];
      if (isSemesterTitle(id)) return;
      _openModal(id);
    });
  }

  // ================= MOBILE =================
  if (isTouch) {
    net.on("selectNode", (params) => {
      if (!params.nodes.length) return;
      const id = params.nodes[0];
      if (isSemesterTitle(id)) return;
      showRelations(id);
    });

    net.on("deselectNode", () => {
      resetGraphStyles();
      hideTooltip();
    });

    // Long press → modal
    net.on("hold", (params) => {
      if (!params.nodes.length) return;
      const id = params.nodes[0];
      if (isSemesterTitle(id)) return;
      _openModal(id);
    });
  }
}

// ================= FUNCIONES PARA NODOS RELACIONADOS =================

/**
 * Búsqueda recursiva DFS de todos los ancestros (pre-requisitos) de un nodo.
 */
function _getAllParents(id, allSubs, visited = new Set()) {
  if (visited.has(id)) return new Set();
  visited.add(id);

  const parents = new Set();
  const subject = allSubs[id];
  if (!subject || !subject.pre) return parents;

  for (const preId of subject.pre) {
    parents.add(preId);
    const grandParents = _getAllParents(preId, allSubs, visited);
    for (const gp of grandParents) parents.add(gp);
  }

  return parents;
}

/**
 * Obtiene los nodos que tienen como pre-requisito directo al nodo seleccionado.
 */
function _getDirectChildren(id, allSubs) {
  const children = new Set();

  for (const [sid, subj] of Object.entries(allSubs)) {
    if (subj.pre.includes(id)) children.add(sid);
  }

  return children;
}

/**
 * Agrupa las materias por semestre.
 */
function _groupSubjectsBySemester(subjects, count) {
  const grouped = {};
  for (let i = 1; i <= count; i++) grouped[i] = {};

  for (const [id, subject] of Object.entries(subjects)) {
    if (grouped[subject.semester]) {
      grouped[subject.semester][id] = subject;
    }
  }

  return grouped;
}

// ================= MODAL (glassmorphism + animación) =================

function _openModal(id) {
  const subject = allSubjects[id];
  if (!subject) return;

  const existing = document.getElementById("subject-modal-overlay");
  if (existing) existing.remove();

  // ── Overlay ──
  const overlay = document.createElement("div");
  overlay.id = "subject-modal-overlay";
  overlay.className = "modal-overlay";

  // ── Modal box ──
  const modal = document.createElement("div");
  modal.className = "modal-content";
  modal.addEventListener("click", (e) => e.stopPropagation());

  // ── Header con degradado ──
  const header = document.createElement("div");
  header.className = "modal-header";

  const badgeRow = document.createElement("div");
  badgeRow.className = "modal-badge-row";

  const typeBadge = document.createElement("span");
  typeBadge.className = "modal-type-badge";
  typeBadge.textContent = subject.badge || "OBL";

  const semBadge = document.createElement("span");
  semBadge.className = "modal-sem-badge";
  semBadge.textContent = `Semestre ${subject.semester}`;

  badgeRow.append(typeBadge, semBadge);

  const title = document.createElement("h2");
  title.className = "modal-title";
  title.textContent = subject.name;

  const closeBtn = document.createElement("button");
  closeBtn.className = "modal-close";
  closeBtn.textContent = "✕";
  closeBtn.setAttribute("aria-label", "Cerrar");
  closeBtn.onclick = () => overlay.remove();

  header.append(badgeRow, title, closeBtn);

  // ── Body ──
  const body = document.createElement("div");
  body.className = "modal-body";

  // Stats cards
  const statsRow = document.createElement("div");
  statsRow.className = "modal-stats-row";

  function makeStatCard(value, label) {
    const card = document.createElement("div");
    card.className = "modal-stat-card";

    const val = document.createElement("div");
    val.className = "modal-stat-value";
    val.textContent = value ?? "–";

    const lbl = document.createElement("div");
    lbl.className = "modal-stat-label";
    lbl.textContent = label;

    card.append(val, lbl);
    return card;
  }

  statsRow.appendChild(makeStatCard(subject.credits, "Créditos"));
  statsRow.appendChild(makeStatCard(subject.weekly_hours, "Horas/sem"));
  if (subject.required_credits > 0) {
    statsRow.appendChild(makeStatCard(subject.required_credits, "Cred. req."));
  }
  body.appendChild(statsRow);

  // Descripción
  if (subject.desc) {
    const descTitle = document.createElement("div");
    descTitle.className = "modal-section-title";
    descTitle.textContent = "Descripción";

    const desc = document.createElement("p");
    desc.className = "modal-desc";
    desc.textContent = subject.desc;

    body.append(descTitle, desc);
  }

  // Pre-requisitos como chips clicables
  const prereqTitle = document.createElement("div");
  prereqTitle.className = "modal-section-title";
  prereqTitle.textContent = "Pre-requisitos";
  body.appendChild(prereqTitle);

  if (subject.pre && subject.pre.length > 0) {
    const chipsWrap = document.createElement("div");
    chipsWrap.className = "modal-chips";

    for (const prereqId of subject.pre) {
      const prereqSub = allSubjects[prereqId];
      if (!prereqSub) continue;

      const chip = document.createElement("button");
      chip.className = "prereq-chip";
      chip.textContent = prereqSub.name;
      chip.title = `Ver ${prereqSub.name} en el grafo`;

      chip.onclick = () => {
        overlay.remove();
        // Pequeño delay para que el modal cierre antes de resaltar
        setTimeout(() => highlightNode(prereqId), 80);
      };

      chipsWrap.appendChild(chip);
    }

    body.appendChild(chipsWrap);
  } else {
    const noPre = document.createElement("p");
    noPre.className = "modal-no-prereqs";
    noPre.textContent = "Sin pre-requisitos.";
    body.appendChild(noPre);
  }

  // Advertencia de créditos requeridos
  if (subject.required_credits > 0) {
    const warning = document.createElement("div");
    warning.className = "modal-warning";
    warning.innerHTML = `Requiere tener aprobados <strong>${subject.required_credits} créditos</strong> antes de cursarla.`;
    body.appendChild(warning);
  }

  // Ensamblar
  modal.append(header, body);
  overlay.appendChild(modal);
  document.body.appendChild(overlay);

  // Cerrar al hacer clic fuera del modal
  overlay.addEventListener("click", () => overlay.remove());

  // Cerrar con ESC
  const escHandler = (e) => {
    if (e.key === "Escape") {
      overlay.remove();
      document.removeEventListener("keydown", escHandler);
    }
  };
  document.addEventListener("keydown", escHandler);
}

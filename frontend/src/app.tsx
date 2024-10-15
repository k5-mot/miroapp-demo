import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { RemoteRunnable } from "@langchain/core/runnables/remote";
import { AIMessage } from "@langchain/core/messages";
import { StickyNote } from "@mirohq/websdk-types";
import '../src/assets/style.css';

const remoteChain = new RemoteRunnable({
    url: "http://localhost:8000/ollama",
});

async function getAbstract() {
    // Get selected sticky notes
    const selection = await miro.board.getSelection()
    let selectedNotes = selection.filter(item => item.type === 'sticky_note') as Array<StickyNote>
    if (selectedNotes.length <= 0) return

    // Generate contexts
    let context = "\n"
    for (let note of selectedNotes) {
        context += `- ${note.content}\n`
    }

    // Create sticky note
    let stickyNote = await miro.board.createStickyNote({
        content: "生成中！！！",
        x: 0,
        y: 0,
    });
    miro.board.viewport.zoomTo(stickyNote)

    // Run LLM chain
    const result = await remoteChain.invoke({ "context": context }) as AIMessage;

    // Update sticky note
    stickyNote.content = result.content as string
    await stickyNote.sync()

    // Debug context and result
    console.log(`Context: ${context}\nResult: ${result.content}\n`)
}

const App: React.FC = () => {
    const [activeTab, setActiveTab] = React.useState(0);
    return (
        <div className="grid wrapper">
            <div className="cs1 ce12">
                <img src="https://di8m9w6rqrh5d.cloudfront.net/JIlYx8qbpWSpOvsR2zvaK74zfLDaj0JO/1920_c988019b-6f82-4ee8-84ac-a74e1616c1e1.png" alt="" />
            </div>
            <div className="cs1 ce12 tabs">
                <div className="tabs-header-list">
                    <div tabIndex={0} className={`tab ${activeTab === 0 ? "tab-active" : ""}`} onClick={() => setActiveTab(0)}>
                        <div className="tab-text" >Phase 1</div>
                    </div>
                    <div tabIndex={1} className={`tab ${activeTab === 1 ? "tab-active" : ""}`} onClick={() => setActiveTab(1)} >
                        <div className="tab-text" >Phase 2</div>
                    </div>
                    <div tabIndex={2} className={`tab ${activeTab === 2 ? "tab-active" : ""}`} onClick={() => setActiveTab(2)} >
                        <div className="tab-text">Phase 3</div>
                    </div>
                </div>
            </div>

            {
                activeTab === 0 ? <div className="cs1 ce12" >
                    <div className="cs1 ce12">
                        <img src="/src/assets/congratulations.png" alt="" />
                    </div>
                    <h1>Congratulations!</h1>
                    <p>You've just created your first Miro app!</p>
                    <p>
                        To explore more and build your own app, see the Miro Developer
                        Platform documentation.
                    </p>
                </div> : ""
            }
            {
                activeTab === 1 ? <div className="cs1 ce12">
                    <button className="button button-primary" onClick={getAbstract}>錬金術</button>
                </div> : ""
            }
            {
                activeTab === 2 ? <div className="cs1 ce12">
                    <a
                        className="button button-primary"
                        target="_blank"
                        href="https://developers.miro.com"
                    >
                        Read the documentation
                    </a>
                </div> : ""
            }

        </div>
    );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

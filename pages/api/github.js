const {Octokit} = require("@octokit/rest");

async function fetchF1Readme() {
    const octokit = new Octokit({
        auth: process.env.GITHUB_AUTH_TOKEN
    });

    const markdown = await octokit.request("GET /repos/{owner}/{repo}/readme/{dir}", {
        owner: "syrchanan",
        repo: "portfolio",
        dir: "r_projects/data_viz_sem_project"
    });

    return markdown.data.content;
}
    
    

export async function getF1ProjectReadme() {
    const markdown = await fetchF1Readme()

    return (
        markdown
    )
}

async function fetchMiningReadme() {
    const octokit = new Octokit({
        auth: process.env.GITHUB_AUTH_TOKEN
    });

    const markdown = await octokit.request("GET /repos/{owner}/{repo}/readme/{dir}", {
        owner: "syrchanan",
        repo: "portfolio",
        dir: "r_projects/data_mining_sem_project"
    });

    return markdown.data.content;
}
    
    

export async function getMiningProjectReadme() {
    const markdown = await fetchMiningReadme()

    return (
        markdown
    )
}

async function fetchAprioriReadme() {
    const octokit = new Octokit({
        auth: process.env.GITHUB_AUTH_TOKEN
    });

    const markdown = await octokit.request("GET /repos/{owner}/{repo}/readme/{dir}", {
        owner: "syrchanan",
        repo: "portfolio",
        dir: "python_projects/data_analysis_sem_project"
    });

    return markdown.data.content;
}
    
    

export async function getAprioriProjectReadme() {
    const markdown = await fetchAprioriReadme()

    return (
        markdown
    )
}

async function fetchAutoTVReadme() {
    const octokit = new Octokit({
        auth: process.env.GITHUB_AUTH_TOKEN
    });

    const markdown = await octokit.request("GET /repos/{owner}/{repo}/readme/{dir}", {
        owner: "syrchanan",
        repo: "portfolio",
        dir: "r_projects/automated_television_ratings"
    });

    return markdown.data.content;
}
    
    

export async function getAutoTVProjectReadme() {
    const markdown = await fetchAutoTVReadme()

    return (
        markdown
    )
}

async function fetchTernReadme() {
    const octokit = new Octokit({
        auth: process.env.GITHUB_AUTH_TOKEN
    });

    const markdown = await octokit.request("GET /repos/{owner}/{repo}/readme/{dir}", {
        owner: "syrchanan",
        repo: "portfolio",
        dir: "r_projects/event_cvg_tern_plot"
    });

    return markdown.data.content;
}
    
    

export async function getTernProjectReadme() {
    const markdown = await fetchTernReadme()

    return (
        markdown
    )
}